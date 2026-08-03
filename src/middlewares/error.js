//Middleware que maneja errores
function error(err, req, res, next) {
    console.error(err);
    res.status(500).json({message: 'Algo salió mal, por favor inténtalo más tarde'})

    next();
}

//Se exporta el middlware para que pueda ser usado en otras secciones
export { error };