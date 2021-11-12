# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all
Registration.destroy_all

#Users

user1 = User.create!({email: 'abir@gmail.com', first_name: 'Abir', last_name: 'Mahamud', password: '123456'})
user2 = User.create!({email: 'hello@gmail.com', first_name:'Joe', last_name: 'BlackSmith', password: '12345678'})
user3 = User.create!({email:'whatsup@gmail.com', first_name: 'Bob', last_name: 'Bradword', password: '1234567'})
user4 = User.create!({email:'up@gmail.com', first_name: 'Tom', last_name: 'Hilfiger', password: '234567'})
user5 = User.create!({email:'down@gmail.com', first_name: 'John', last_name: 'Rohn', password: '345678'})
user6 = User.create!({email:'left@gmail.com', first_name: 'Ron', last_name: 'Bant', password: '456789'})

# Events

event1 = Event.create!({title: 'Biking with Bikers', description: 'Enjoy riding bikes? This is the perfect event for you to come show off your skills', date: "2021-12-21 06:06:06", category: 'Today', author_id: user1.id, start_time: "2021-01-05 03:06:06", end_time: "2021-12-12 06:15:07", author_name: user1.first_name, pic_url: "/assets/biking.png" })
event2 = Event.create!({title: 'Spiritual Retreat', description: 'Feeling down and depressed? Relieve your sadness by reading the Holy Quran', date: "2020-11-21 06:06:06", category: 'Religion', author_id: user2.id, start_time: "2020-12-12 02:06:06", end_time: "2021-12-12 05:00:00", author_name: user2.first_name, pic_url: "/assets/spiritual.png" }) 
event3 = Event.create!({title: 'Learn Python in 5 Minutes!', description: 'Python in 5 minutes?? Is that even possible?? Maybe, the least we can do is try.', date: "2021-12-12 06:06:06", category: 'Online', author_id: user3.id, start_time: "2020-12-12 06:00:00", end_time: "1992-12-12 10:00:00", author_name: user3.first_name, pic_url: "/assets/python.png"})
event4 = Event.create!({title: 'Help Plant Trees!', description: 'We  need to help our ecosystems but using less and planting more!', date: "2020-12-29 06:06:06", category: 'Today', author_id: user4.id, start_time: "2020-11-15 06:06:06", end_time: "2020-11-15 07:07:07", author_name: user4.first_name, pic_url: "/assets/forest.png"})
event5 = Event.create!({title: 'Summer Camp for Children', description: 'The perfect time for children to de-stress and take a break from their devices to enjoy nature', date: "2021-11-16 06:06:06", category: 'This weekend', author_id: user1.id, start_time: "2021-12-12 06:06:06", end_time: "2021-12-12 07:07:07", author_name: user1.first_name, pic_url: "/assets/summercamp.png"})
event6 = Event.create!({title: 'Dinner on the Beach', description: 'Dinner with a view? Sign me up!', date: "2021-12-12 06:06:06", category: 'Free', author_id: user5.id, start_time: "2020-12-12 06:06:06", end_time: "2020-12-12 07:07:07", author_name: user5.first_name, pic_url: "/assets/palm-dubai.png"})
event7 = Event.create!({title: 'Donate Blood', description: 'It is very important that we donate blood for those who are in dire need of it.', date: "2021-01-12 06:06:06", category: 'Charity & Causes', author_id: user6.id, start_time: "2022-12-12 06:06:06", end_time: "2022-12-12 07:07:07", author_name: user6.first_name, pic_url: "/assets/blood.png"})
event8 = Event.create!({title: 'Geology Day', description: 'Learn about the world we are living in.', date: "2021-01-12 06:06:06", category: 'Charity & Causes', author_id: user6.id, start_time: "2022-12-12 06:06:06", end_time: "2022-12-12 07:07:07", author_name: user6.first_name, pic_url: "/assets/geology.png"})
event9 = Event.create!({title: 'Car Meetup', description: 'Come show us your coolest rides for a chance to win the coolest car award.', date: "2021-01-12 06:06:06", category: 'Charity & Causes', author_id: user6.id, start_time: "2022-12-12 06:06:06", end_time: "2022-12-12 07:07:07", author_name: user6.first_name, pic_url: "/assets/cars.png"})
event10 = Event.create!({title: 'Family Night', description: 'Spend more time with Mom and Dad to show them you care.', date: "2021-01-12 06:06:06", category: 'Charity & Causes', author_id: user6.id, start_time: "2022-12-12 06:06:06", end_time: "2022-12-12 07:07:07", author_name: user6.first_name, pic_url: "/assets/family.png"})
event11 = Event.create!({title: 'Basketball Fun', description: 'Come with your team and see who is the champion.', date: "2021-01-12 06:06:06", category: 'Charity & Causes', author_id: user6.id, start_time: "2022-12-12 06:06:06", end_time: "2022-12-12 07:07:07", author_name: user6.first_name, pic_url: "/assets/basketball.png"})


#Registrations

registration1 = Registration.create!(buyer_id: user1.id, event_id: event1.id)
registration2 = Registration.create!(buyer_id: user1.id, event_id: event2.id)
registration3 = Registration.create!(buyer_id: user1.id, event_id: event3.id)