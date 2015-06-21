var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/*  GET author */
router.get('/author', function(req, res){
	res.render('author', { nombre: 'Eugenio J. Caicedo H.' });
});

/* GET quizes*/
//Auto-Load
router.param('quizId', quizController.load);

//Lista Preguntas
router.get('/quizes', quizController.index);

//Buscar
router.get('/find', quizController.find);

// Pregunta
router.get('/quizes/:quizId(\\d+)', quizController.show);

//Respuesta
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
