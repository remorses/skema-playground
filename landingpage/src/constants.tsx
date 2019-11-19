

export const simpleUsage = `
Food: "meat" | "fish" | "ass"

User:
    name: Str
    surname: Str
    eats: [Food]
    age: Int
    animals: [
        name: Str
        eats: Food
    ]
`

export const interfacesUsage = `
Zoo:
    _id: ObjectId
    address: Address
    animal_ids: [ObjectId]

Animal:
    _id: ObjectId
    animal_type: "panthera" | "tiger" | "bear"

Panthera: Animal &
    black_nuance: "super_dark" | "dark" | "light"

Tiger: Animal &
    humans_killed: Int

Bear: Animal &
    likes_honey: Bool

Address: Str
`

export const unionsUsage = `
Zoo:
    _id: ObjectId
    address: Address
    animal_ids: [ObjectId]

Animal: Tiger | Bear | Panthera

Panthera:
    _id: ObjectId
    animal_type: "panthera"
    black_nuance: "super_dark" | "dark" | "light"

Tiger:
    _id: ObjectId
    animal_type: "tiger"
    humans_killed: Int

Bear:
    _id: ObjectId
    animal_type: "bear"
    likes_honey: Bool

Address: Str
`