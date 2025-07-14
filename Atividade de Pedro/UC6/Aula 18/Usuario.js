// Definição da classe Usuario
class Usuario {
    // Atributos para a classe Usuario, o que todo usuario tem que ter?
    //nome, idade, genero, telefone, email, cpf, cep, rg

    nome;
    idade;
    genero;
    telefone;
    email;
    cpf;
    cep;
    rg;

    //Método construtor - é um método epecial que é chamado quando criamos uma nova instância da classe.
    // Ele recebe todos os parâmetros nome, idade, genero, telefone, email, cpf, cep, rg.

    constructor(nome, idade, genero, telefone, email, cpf, cep, rg) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.cep = cep;
        this.rg = rg;
    }

    //Métodos getters para acessar os atríbutos da classe

    //Retornar o nome do usuário
    //nome, idade, genero, telefone, email, cpf, cep, rg
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getGenero() {
        return this.genero;
    }
    getTelefone() {
        return this.telefone;
    }
    getEmail() {
        return this.email;
    }
    getCpf() {
        return this.cpf;
    }
    getCep() {
        return this.cep;
    }
    getRg() {
        return this.rg;
    }

    // Métodos settters para acessar e modificar os atributos da classe
    // Retorna o nome de usuário
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    setEmail(email) {
        this.email = email;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setCep(cep) {
        this.cep = cep;
    }
    setRg(rg) {
        this.rg = rg;


    exibirDados() {
        return `
        Nome: ${this.nome}
        Idade: ${this.idade}
        Genêro: ${this.genero}
        Telefone: ${this.telefone}
        Email: ${this.email}
        Cpf: ${this.cpf}
        Cep: ${this.cep}
        Rg: ${this.rg}
        `
        }
    }
}

// Criação de uma instâcia / objeto

let usuario01 = new Usuario("Pedro", 18, "m", "(84)0000-0000", " pedro@gmail.com", "000.000.000-30", "29000000", "888585")

console.log(usuario01.exibirDados());