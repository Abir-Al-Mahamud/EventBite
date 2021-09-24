class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true 
    validates :first_name, presence: true 
    validates :last_name, presence: true 
    validates :password_digest, presence: true 
    validates :session_token, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password 

    after_initialize :ensure_session_token 

    has_many :registrations,
        foreign_key: :buyer_id,
        class_name: :Registration
    #, dependent: :destroy

    has_many :events,
        class_name: :Event,
        foreign_key: :author_id

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user 
        else
            nil 
        end
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def reset_session_token! 
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

end