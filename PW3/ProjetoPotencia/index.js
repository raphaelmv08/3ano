import express from 'express';

const app = express()
app.use(express.urlencoded({
    extended: true
 })
)

app.use(express.json())


app.listen(3000,() => {    
    console.log('rodando na porta 3000')
})


app.get ('/prop', (req, res) => {
    let propiedades = {
        descricao: 'Propiedades:',
        resolucao : {
            p1: '1ª propriedade – Multiplicação de potências de mesma base: 5⁴· 5² = 5⁶ = 5·5·5·5·5·5 = 5⁶ Resultado: 5⁴· 5² = 5⁴+2=5⁶ ',
            p2: '2ª propriedade – Divisão de potências de mesma base: 2⁸ : 2⁵ = 2⁸-⁵ = 2',
            p3: '3ª propriedade – Potência de potência: (5³)² = (5 · 5 · 5)² = (5 · 5 · 5) · (5 · 5 · 5) = 5⁶ Resultado: = (5³)² =5³ · 2 = 5⁶',
            p4: '4ª propriedade – Potência de um produto: (2 · 4)³=(2 · 4)(2 · 4)(2 · 4) = 2 · 2 · 2 · 4 · 4 · 4 = 2³ · 4³ Resultado: (2 · 4)³ = 2³ · 4³',
            p5: '5ª propriedade – Potência do quociente: (6 : 4)² = (6 : 4) · (6 : 4) = 6² · 4² Resultado: = (6 : 4)² = 6² : 4² '
        }
    }
    res.json(propiedades)
}
)

app.get ('/ex1', (req, res) => {
    let ex1 = {
        descricao: '2 ^ 3',
        resolucao : {
            l1: ' 2^3 = 2 *2*2',
            l2: '8'
        }
    }
    res.json(ex1)
}
)

app.get ('/ex2', (req, res) => {
    let ex2 = {
        descricao: '5²',
        resolucao : {
            l1: ' 12^³ = 12 *12*12',
            l2: '1728'
        }
    }
    res.json(ex2)
}
)

app.get ('/ex3', (req, res) => {
    let ex3 = {
        descricao: '5²',
        resolucao : {
            l1: ' 5² = 5*5',
            l2: '25'
        }
    }
    res.json(ex3)
}
)

app.get ('/ex4', (req, res) => {
    let ex4 = {
        descricao: '10⁴',
        resolucao : {
            l1: ' 10⁴ = 10*10*10*10',
            l2: '10.000'
        }
    }
    res.json(ex4)
}
)

app.get ('/ex5', (req, res) => {
    let ex5 = {
        descricao: '3³',
        resolucao : {
            l1: ' 3³ = 3*3*3',
            l2: '27'
        }
    }
    res.json(ex5)
}
)

app.get ('/ex6', (req, res) => {
    let ex2 = {
        descricao: '7²',
        resolucao : {
            l1: ' 7² = 7*7',
            l2: '49'
        }
    }
    res.json(ex6)
}
)

app.get ('/ex7', (req, res) => {
    let ex2 = {
        descricao: '12^³',
        resolucao : {
            l1: ' 12^³ = 12 *12*12',
            l2: '1728'
        }
    }
    res.json(ex7)
}
)

app.get ('/ex8', (req, res) => {
    let ex2 = {
        descricao: '12^³',
        resolucao : {
            l1: ' 12^³ = 12 *12*12',
            l2: '1728'
        }
    }
    res.json(ex8)
}
)


app.get ('/ex9', (req, res) => {
    let ex2 = {
        descricao: '12^³',
        resolucao : {
            l1: ' 12^³ = 12 *12*12',
            l2: '1728'
        }
    }
    res.json(ex9)
}
)
app.get ('/ex10', (req, res) => {
    let ex2 = {
        descricao: '12^³',
        resolucao : {
            l1: ' 12^³ = 12 *12*12',
            l2: '1728'
        }
    }
    res.json(ex10)
}
)


app.get ('/ex11', (req, res) => {
    let ex2 = {
        descricao: '12^³',
        resolucao : {
            l1: ' 12^³ = 12 *12*12',
            l2: '1728'
        }
    }
    res.json(ex11)
}
)
