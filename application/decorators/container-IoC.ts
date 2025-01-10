const bean = new Map();

function injectable(argument?: any, type?: any) {
    return (target: Object, propertyKey: string) => {
        console.log('Clase', target);
        console.log('Nombre de la propiedad', propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: false,
            get: function (this: { [argument: string]: any}) {
                return this[argument];
            },
            set: function (this: { [naming: string]: any}) {
            }
        });
    }
}

export default injectable;