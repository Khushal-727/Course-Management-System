var db = require('./connectDB')
const Course = db.course;

var getAllCourses = async (req,res) => {
    const data = await Course.findAll({});
    res.status(200).json({data:data});
    console.log('All records Fetch.');
}

var addCourse = async (req,res) => {
    var postData = req.body;
    if(postData.length > 1) {
        var data = await Course.bulkCreate(postData);
    } else {
        var data = await Course.create(postData);
    }
    res.status(200).json({data:data});
    console.log('Records inserted.');
}

var deleteCourse = async (req,res) => {
    const data = await Course.destroy({
        where:{ id: req.params.id }
    });
    res.status(200).json({data:data});
    console.log('Record deleted.');
}

var getOneCourse = async (req,res) => {
    const data = await Course.findOne({
        where:{ id: req.params.id }
    });
    res.status(200).json({data:data});
    console.log('One record Fetch.');
}


let updateCourse = async (req,res) => {
    let updatedData = req.body;
    const data = await Course.update(updatedData,{
        where: {id: req.params.id}
    });
    
    res.status(200).json({data:data});
    console.log('One record Updated.');
}


module.exports = {
    addCourse,
    getOneCourse,
    deleteCourse,
    updateCourse,
    getAllCourses
}