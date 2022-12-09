class Book
{
    _title
    _description
    _author
    _book

    constructor(nomeTitle, nomeDescription, nomeAuthor)
    {
        this._title = nomeTitle
        this._description = nomeDescription
        this._author = nomeAuthor
        this._book = []

    }

    addBook(title, description, author)
    {
        let listaAux = [title, description, author]
        this._book.push(listaAux)
        console.log(listaAux)
    }

    getBooks()
    {
        console.log(this._book)
    }

    removeBookById(string)
    {
        let contador = 0
        let i = 0
        let aux = this._book
        for (i of aux)
        {
            if (i[0] === string)
        {
            this._book.splice(contador, contador)
            console.log('Livro removido com SUCESSO')
        }

        else
        {
            contador += 1
        }

        }
        

    }

    getBookById(string)
    {
        let tempo = 0
        let i = 0
        let aux = this._book
        for (i of aux)
        {
            if (i[0] === string)
            {
                console.log(i)

            }

            else
            {
                tempo += 1
            }
        }
    }

    updateBookById(string, novoTitle, novaDescription, novoAuthor)
    {
        let contador = 0
        let i = 0
        let aux = this._book
        for (i of aux)
        {
            if ( i[0] === string)
            {
                this._book.splice(contador, contador+1)
                console.log('Item editado')
                let listaAux = [novoTitle, novaDescription, novoAuthor]
                this._book.push(listaAux)
                console.log(listaAux)
            }
            else
            {
                contador += 1
            }

        }


    }

}


// _________________________TESTE_____________________________________

// let teste = new Book('Diario', 'Historia de Jovem', 'Emmanuel')

// teste.addBook('Diario', 'Historia de Jovem', 'Emmanuel')
// teste.addBook('EstreladoAmanha', 'ficção cientifica', 'Besouro')

// teste.getBooks()

// teste.addBook('ItaCoisa', 'Suspense', 'NaoSei')

// teste.removeBookById('EstreladoAmanha')
// teste.getBooks()
// teste.getBookById('ItaCoisa')


// teste.updateBookById('Diario', 'Diario 22', 'Historia de Jovem', 'Emmanuel')
// teste.addBook('EstreladoAmanha', 'ficção cientifica', 'Besouro')

// teste.getBooks()