const express= require("express");
const bodyParser= require("body-parser");
const swaggerJSDoc =require("swagger-jsdoc");
const swaggerUI =require("swagger-ui-express");

const app=express();
const port=3000;
//body parser middleware
app.use(bodyParser.json());

const swaggerOptions={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Template api with swagger",
            version:"1.0.0",
            description:
            "A template of API to demonstrate  Swagger integation with Node.js",
        },
        servers:[
            {
                url: `http://localhost:${port}`,
            },
        ],
    },
    apis:["./routes/*.js"],//path to the API routes directory
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

//serve swagger UI
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerSpec));

app.get("/",(req,res)=>{
    res.send('Server is running....');
});

//example rotes
app.use("/api",require("./routes/sampleRoutes"));

//start the server
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port} `);
});
 