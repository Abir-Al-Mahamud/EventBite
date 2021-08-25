# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

user1 = User.create!({email: 'abir@gmail.com', first_name: 'Abir', last_name: 'Mahamud', password: '123456'})
user2 = User.create!({email: 'hello@gmail.com', first_name:'Joe', last_name: 'BlackSmith', password: '12345678'})
user3 = User.create!({email:'whatsup@gmail.com', first_name: 'Bob', last_name: 'Bradword', password: '1234567'})
user4 = User.create!({email:'up@gmail.com', first_name: 'Tom', last_name: 'Hilfiger', password: '234567'})
user5 = User.create!({email:'down@gmail.com', first_name: 'John', last_name: 'Rohn', password: '345678'})
user6 = User.create!({email:'left@gmail.com', first_name: 'Ron', last_name: 'Bant', password: '456789'})
event1 = Event.create!({title: 'Biking with Bikers', description: 'Enjoy riding bikes? This is the perfect event for you to come show off your skills', date: "1990-12-12 06:06:06", category: 'Today', author_id: user1.id, start_time: "1990-12-12 06:06:06", end_time: "1990-12-12 07:07:07", author_name: user1.first_name, pic_url: "compass.jpg"})
event2 = Event.create!({title: 'Spiritual Retreat', description: 'Feeling down and depressed? Relieve your sadness by reading the Holy Quran', date: "1991-12-12 06:06:06", category: 'Religion', author_id: user2.id, start_time: "1991-12-12 06:06:06", end_time: "1991-12-12 07:07:07", author_name: user2.first_name, pic_url: "compass.jpg"}) 
event3 = Event.create!({title: 'Learn Python in 5 Minutes!', description: 'Python in 5 minutes?? Is that even possible?? Maybe, the least we can do is try.', date: "1992-12-12 06:06:06", category: 'Online', author_id: user3.id, start_time: "1992-12-12 06:06:06", end_time: "1992-12-12 07:07:07", author_name: user3.first_name, pic_url: "compass.jpg"})
event4 = Event.create!({title: 'Help Plant Trees!', description: 'We  need to help our ecosystems but using less and planting more!', date: "1994-12-12 06:06:06", category: 'Today', author_id: user4.id, start_time: "1994-12-12 06:06:06", end_time: "1994-12-12 07:07:07", author_name: user4.first_name, pic_url: "compass.jpg"})
event5 = Event.create!({title: 'Summer Camp for Children', description: 'The perfect time for children to de-stress and take a break from their devices to enjoy nature', date: "1995-12-12 06:06:06", category: 'This weekend', author_id: user1.id, start_time: "1995-12-12 06:06:06", end_time: "1995-12-12 07:07:07", author_name: user1.first_name, pic_url: "compass.jpg"})
event6 = Event.create!({title: 'Dinner on the Beach', description: 'Dinner with a view? Sign me up!', date: "1996-12-12 06:06:06", category: 'Free', author_id: user5.id, start_time: "1996-12-12 06:06:06", end_time: "1996-12-12 07:07:07", author_name: user5.first_name, pic_url: "compass.jpg"})
event7 = Event.create!({title: 'Help Feed the Needy', description: 'It is very important that we give back to those who are in need.', date: "1998-12-12 06:06:06", category: 'Charity & Causes', author_id: user6.id, start_time: "1998-12-12 06:06:06", end_time: "1998-12-12 07:07:07", author_name: user6.first_name, pic_url: "compass.jpg"})