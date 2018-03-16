# d_struct

## Introducción
> Libreria sencilla para la implementacion de estructura de datos en node usando redis

## Colas
>Se implementa un objeto de tipo DSQ (Data Structure Queue).

### Atributos
>> Id: que define la llave (key) del elemento en redis

>> Output: este elemento se usa para las operaciones de extraccion de informacion, podria ser privado pero aun no se como hacerlo privado.

### Metodos
#### Push
> Se usa para ingresar elementos a la cola
>> Q.push('valor',Q)
#### Pop
> Se usa Para extraer elementos de la cola, Retorna un string con el ultimo elemento
>> Q.pop(Q)
#### Peek
> Se usa para Ver el ultimo elemento de la cola, Retorna un string con ultimo elemento
>> Q.peek(Q)
#### Show
> Se usa para ver todos los elementos de la cola, Retorna un string con toda la cola. 
>> Q.show(Q)





