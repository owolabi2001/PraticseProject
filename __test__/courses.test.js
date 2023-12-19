const Course = require("../model/courseModel");
const {genericResponse} = require("../dto/genericResponse");
const app = require("../server")
const supertest = require("supertest");


jest.mock("../model/courseModel.js");



// Test for add courses endpoint
describe("Testing all the case for add Course endpoint", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mock calls before each test
      });

      
    it("", async()=>{
        // mocks
        Course.findOne.mockResolvedValue(null);
        Course.create.mockResolvedValueOnce({
            courseTitle: 'Test Course',
            courseCode: 'TEST123',
            courseUnit: 3
        });
        //given 
        const courseDetails = {
            courseTitle: 'Test Course',
            courseCode: 'TEST123',
            courseUnit: 3
        }

        const expectedResponseBody = genericResponse(
            "00",
            "Course succesfully created",
            courseDetails,
            null
        )
            
        // when
        const response = await supertest(app).post("/api/course")
            .send(courseDetails)
            
        // assert
        expect(response.status).toBe(200);
        // expect(response.body).toBe()
        expect(response.body).toEqual(expectedResponseBody);
        



    });

    // it("", async()=>{

    // });

    // it("", async()=>{

    // });

    // it("", async()=>{

    // });
})

