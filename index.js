const express = require("express");
const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());


app.listen(process.env.PORT || 3000);

app.get('/', 
    function (req, res){    
        res.send("Atividade 7 - Pedro e Gabriela");
    }
);

const funcionarios = [{"nome":"Pedro ","idade":"23","cidade":"Campinas"},
                    {"nome":"Gabriela ","idade":"24","cidade":"Muzambinho"}, ];

app.get('/funcionarios',
    function(req, res){
        res.send(funcionarios.filter(String));
    }
);

app.get('/funcionarios/:id',
    function(req, res){
        const id = req.params.id - 1;
        const funcionario = funcionarios[id];
        if (!funcionario){
            res.send("Funcionario nao cadastrado");
        } else {
            res.send(funcionario);
        }
    }
)

app.post('/funcionarios', 
    (req, res) => {
        console.log(req.body.funcionario);
        const funcionario = req.body.funcionario;
        funcionarios.push(funcionario);
        res.send("Funcionario cadastrado")
    }
);

app.put('/funcionarios/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const funcionario = req.body.funcionario;
        funcionarios[id] = funcionario;        
        res.send("Funcionario atualizado.")
    }
)

app.delete('/funcionarios/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete funcionarios[id];

        res.send("Funcionario excluido.");
    }
);