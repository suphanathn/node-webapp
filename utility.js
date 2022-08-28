//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzAyNTg4LCJleHAiOjE2NjE3MDYxODgsIm5iZiI6MTY2MTcwMjU4OCwianRpIjoiYkpJTFZqbEdERnlEa29ueiIsInN1YiI6NjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.p1HiQo3IVTH4c6GSTX_OiU_mVYFnQJ9a5Z4aSsxRA0E"; // put access token
const student = {
  name: '', // replace with your full name.
  age: 19, // put your age.
  gender: '', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}
exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}