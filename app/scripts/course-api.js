module.exports = {
  getDescription: getDescription,
  getCourseContent: getCourseContent,
  getAllCourse: getAllCourse,
}

function getDescription (name, cb) {
  var url = `https://api.github.com/repos/DecentralizedPolymath/courses/contents/${name}/description.json`
  gitRequest(url, {
    responseType: '+json',
  }, cb)

}

function getAllCourses (cb) {
  var url = `https://api.github.com/repos/DecentralizedPolymath/courses/contents`
  gitRequest(url, {
    responseType: 'raw',
  }, cb)
}

function getCourseContent (course, fileName, cb) {
  var url = `https://api.github.com/repos/DecentralizedPolymath/courses/contents/${course}/${fileName}.md`
  gitRequest(url, {
    responseType: 'html',
  }, cb)
}

function gitRequest (url, {responseType, method, onLoad} = {responseType:'raw', method:'get'}, cb) {
  var course = new XMLHttpRequest()
  var headder = responseType.startsWith('+') ? `application/vnd.github.v3${responseType}` : `application/vnd.github.v3.${responseType}`
  course.open(method, url)
  course.setRequestHeader('Accept', headder)
  course.addEventListener('load', onLoad || requestListner)
  function requestListner (request) {
    queryResponse = JSON.parse(this.responseText)
    cb(queryResponse)
  }
}
