
function chequearDisponibilidad(isbnIngresado) {
	for(i = 0; i < libros.length; i++) {
		const libro = libros[i]
		const titulo = libro.titulo
		const isbn = libro.isbn
		const autor = libro.autor
		const fechaDevolucion = libro.fechaDevolucion
		const disponible = libro.disponible
		if(isbn === isbnIngresado) {
			if (disponible) {
				return '"' + libro.titulo + '" ' + "de " + autor + ' esta disponible'
			}
			return '"' + libro.titulo + '" ' + "de " + autor + ' fue prestado, va a ser devuelto el ' + fechaDevolucion
		}
	} 	
	return 'No se ha encontrado el libro'
}

console.log(chequearDisponibilidad('1150207064720'))

function buscarPorAutor(autorIngresado) {
	const librosPorAutor = []
	for(i = 0; i < libros.length; i++) {
		const libro = libros[i]
		const titulo = libro.titulo
		const autor = libro.autor
		const isbn = libro.isbn
		const disponible = libro.disponible
		if(autor === autorIngresado && disponible) {
			librosPorAutor.push({
				titulo: titulo,
				isbn: isbn,
			})
		}
	}
	if (librosPorAutor.length === 0) {
		return 'No se encontraron libros de ese autor'
	} else {
		return librosPorAutor
	}	
}

console.log(buscarPorAutor('Jorge Luis Borges'))

function buscarMasPedidos(libros) {
	function compararLibros (a,b) {
		return (b.cantidadVecesPedido - a.cantidadVecesPedido)
	}
	const librosMasPedidos = libros.sort(compararLibros)
	librosMasPedidos.splice(10)
	return librosMasPedidos
}

console.log(buscarMasPedidos(libros))

