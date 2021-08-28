const Apuestas = require("./Apuestas")
// @ponicode
describe("nuevaApuesta", () => {
    let inst

    beforeEach(() => {
        inst = new Apuestas.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.nuevaApuesta("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.nuevaApuesta("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.nuevaApuesta("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.nuevaApuesta("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.nuevaApuesta(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("procesarInput", () => {
    let inst

    beforeEach(() => {
        inst = new Apuestas.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.procesarInput("Anas", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.procesarInput("Michael", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.procesarInput("Pierre Edouard", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.procesarInput("Michael", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.procesarInput("George", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.procesarInput(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("hacerApuesta", () => {
    let inst

    beforeEach(() => {
        inst = new Apuestas.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.hacerApuesta()
        }
    
        expect(callFunction).not.toThrow()
    })
})
