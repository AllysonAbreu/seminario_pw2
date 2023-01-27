const supertest = require("supertest");

const server = supertest.agent("http://localhost:3000");

describe("Exemplo básico de teste unitário", () => {
    it("deve retornar a página principal", (done) => {
        server
            .get("/")
            .expect("Content-type", /text/)
            .expect(200)
            .end(function (err, res) {
                done();
            });
    });
});