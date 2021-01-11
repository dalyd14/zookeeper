const fs = require('fs')
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers.json");

jest.mock('fs')

test("creates a zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Darlene", id: "54", age: 34, favoriteAnimal: "Ping" },
        zookeepers
    );

    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("54");
    expect(zookeeper.age).toBe(34);
    expect(zookeeper.favoriteAnimal).toBe("Ping");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear"
        },
        {
            id: "3",
            name: "Linda",
            age: 48,
            favoriteAnimal: "otter"
        }
    ];

    const updatedZookeepers = filterByQuery({ favoriteAnimal: "otter" }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear"
        },
        {
            id: "3",
            name: "Linda",
            age: 48,
            favoriteAnimal: "otter"
        }
    ];

    const result = findById("3", startingZookeepers);

    expect(result.name).toBe("Linda");
});

test("validates age", () => {
    const validZookeeper = {
        id: "2",
        name: "Isabella",
        age: 67,
        favoriteAnimal: "bear"
    }
    const invalidZookeeper = {
        id: "3",
        name: "Linda",
        age: "48",
        favoriteAnimal: "otter"
    }

    const result = validateZookeeper(validZookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});