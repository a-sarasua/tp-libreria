
function chequearDisponibilidad(isbnIngresado) {
	for(i = 0; i < libros.length; i++) {
		const libro = libros[i]
		const titulo = libro.titulo
		const isbn = libro.isbn
		const autor = libro.autor
		const fechaDevolucion = libro.fechaDevolucion
		const disponible = libro.disponible
		if(isbn === isbnIngresado) {
			if (disponible == true) {
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
		if(autor === autorIngresado) {
			if (disponible == true) {
				librosPorAutor.push({
					titulo: titulo,
					isbn: isbn,
				})
			}
		}
	}
	if (librosPorAutor == '') {
		return 'No se encontraron libros de ese autor'
	} else {
		return librosPorAutor
	}	
}

console.log(buscarPorAutor('Jorge Luis Borges'))

function buscarMasPedidos(libros) {
	let librosMasPedidos = []
	let cantidadPedidos = []
	for(i = 0; i < libros.length; i++) {
		const libro = libros[i]
		const titulo = libro.titulo
		const cantidadPedido = libro.cantidadVecesPedido		
		cantidadPedidos.push({
			titulo: titulo,
			vecesPedido: cantidadPedido, 
		})
	}
	librosMasPedidos = cantidadPedidos.sort(function (a, b) {return (b.vecesPedido - a.vecesPedido)})
	librosMasPedidos = cantidadPedidos.slice(0, 10)
	return librosMasPedidos
}

console.log(buscarMasPedidos(libros))

