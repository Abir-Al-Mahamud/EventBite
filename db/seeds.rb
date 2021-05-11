# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create([ {email: 'abir@gmail.com', first_name: 'Abir', last_name: 'Mahamud'}])
user2 = User.create([{email: 'hello@gmail.com', first_name:'Joe', last_name: 'BlackSmith'}]), 
user3 = User.create([{email:'whatsup@gmail.com', first_name: 'Bob', last_name: 'Bradword'}]),