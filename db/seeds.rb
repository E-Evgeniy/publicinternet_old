# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Place.create(name: 'Starbucks', address: 'Bavarskya st', city: 'New York')
InternetSpeed.create(place_id: 1, download_speed: 25, download_units: '1')

Place.create(name: 'Macd', address: 'Sov st', city: 'Mexico')
InternetSpeed.create(place_id: 2, download_speed: 10, download_units: '2')