# Mini-Curso TypeScript

- **Ferramenta que avisa, enquanto estamos desenvolvendo, possíveis erros relacionados a tipo, além de fornecer uma _auto-complete_ sobre os atributos e funções que determinado "elemento" tem acesso, entre outras "funcionalidades";**

- **Dependência de desenvolvimento: `npm i -D typescript`;**

- **Outra coisa a se instalar (os tipos do _express_): `npm i -D @types/express`;**

- **Extensão: `.ts`;**

  

### Configurando TypeScript (configurações mínimas necessárias) e executando aplicação

- **Para isso, devemos criar o arquivo `tsconfig.json`;**
- **Configurações:**

  ```json
  {
    
    "compilerOptions": {
      "outDir": "dist", // Pasta destino para os códigos convertidos em JavaScript puro
      "esModuleInterop": true, // Ajuda a entender os diferentes tipos de importação existentes
    },
    "ts-node": {
      "esm": true // Especifica o padrão de importação (esmodule)
    }
  }
  
  ```
- **OBS.: Arquivos `.ts` não são executáveis;**
- **Executando:**

  - **Podemos utilizar o comando: `npx nodemon dist/main.js`;**
  - **Ou de uma forma melhor (ao invés de toda vez ter que rodar o comando `npx tsc` e em seguida o comando `npx nodemon dist/main.js`), executando direto dos arquivos `.ts`:**
    - **Para isso, utilizamos o comando: `npx ts-node src/main.ts` (devemos habilitar a configuração do `ts-node`, com `"esm": true`);**
    - **Aqui o arquivo TypeScript é convetido em um arquivo JavaScript e esse arquivo JavaScript é lido;**
    - **Executando dessa forma, ainda temos o problema de que, a cada atualização nos arquivos, os mesmo não são compilados novamente;**

  - **A terceira forma, é utilizando o `nodemon`:**
    - **Para isso instalamos o `ts-node`: `npm i -D ts-node`;**
    - **Feito isso, basta utilizarmos o comando: `npx nodemon src/main.ts`;**




### Tipos (primitivos)

- **`string`;**
- **`number`;**
- **`boolean`;**



### Inferência de tipo

- **Quando o tipo de uma variável é definido a partir do tipo do valor que a ela é **
- **atribuido, na sua declaração;**



### Tipos em funções

- **`void`: "retorno vazio" (quando nada é retornado);**



### Tipagem de arrays

```typescript
const arrayStrings: string[] = ["A", "B", "C"];
const arrayNumbers: number[] = [1, 2, 3];
const arrayBooleans: boolean[] = [true, false];
```



### Operador Union

- **Utilizado quando queremos que uma variável seja de um tipo, ou de outro;**

- **Quando utilizado com arrays, especificamos os tipos dos valores aceitos naqueles arrays;**

  

### Protocols e `as`
- **Camanda onde ficam os tipos (protocolos/contratos);**
- **OBS.: contratos são as regras de definição das entidades do nosso projeto;**
- **Já o `as` é utilizado quando queremos que alguma variável se comporte como um tipo específico (possua as mesmas características);**



### `Joi` e Tempo de compilação x Tempo de execução

- **Erros em tempo de compilação, impedem a compilação do arquivo `.ts`;**

  - **O erro é mostrado na tela (no terminal);**

- **No caso de dados que dependem da aplicação estar rodando, para serem recebidos e sofrerem alguma ação, como por exemplo, uma validação  desses dados, o TypeScript não poderá nos ajudar;**

- **Com isso, surge a necessidade de uma ferramenta como o `Joi`, para validar os dados em tempo de execução;**

  - **Não é necessário a instalação do tipos do `Joi`: `npm i -D @types/joi` (por padrão, ele já vem com os tipos);**

  - **Após instalarmos o `Joi`, ao realizar a importação, obteremos um erro (esse erro ocorre porque algumas _libs_, assim como o `Joi`, possuem um sistema de importação diferente do padrão do TypeScript):**

    ```typescript
    // ERROR!
    import Joi from "joi";
    ```

  - **Soluções:**

    ```json
    // 1
    {
      "compilerOptions": {
        "baseUrl": "urlBaseDaAplicação",
        "paths": {
          "joi": [ // nome da lib
            "node_modules/joi/dist/joi-browser.min" // caminho da lib
          ]
        }
      },
    }
    
    // 2
    {
      "compilerOptions": {
        // "moduleResolution": "classic" |-> padrão TypeScript
        "moduleResolution": "Node"
      },
    }
    ```

- **Considerações finais: o TypeScript nos ajuda no tempo de compilação, enquanto o `Joi` nos ajuda no tempo de execução;**

- **Documentação: https://www.typescriptlang.org/docs/handbook/module-resolution.html;**



### Conectando ao banco e Generics

- **Banco utilizado: `PostgreSQL`;**
  
  - **Instalação da _lib_: `npm i pg`;**
  - **Instalação dos tipos: `npm i -D @types/pg`;**
- **Generics: utilizado para a criação de tipos/dados genéricos;**

  ```typescript
  Promise<QueryResult<any>>
      
  // QueryResult: tipo de dado retornado pelo PG;
  ```



### Utility Types

- **`Omit`: possibilita a criação de um tipo, com base outro, com a possibilidade de omitir no "tipo criado", as propriedades indesejadas do "tipo de referência";**
- **Partial: permite a criação de um tipo que pode aceitar qualquer dado, desde que esse dado corresponda as especificações do "tipo de referência" aplicado (todas as propriedades do "tipo de referência" passam a ser opcionais);**
- **Documentação: https://www.typescriptlang.org/docs/handbook/utility-types.html;**



### Comandos
- **`npx nodemom arquivo.js`: executa o nosso back;**

- **`npx tsc`: converte o código (de TypeScript para JavaScript);**

  - **`tsc`: typescript compiler;**

  

  