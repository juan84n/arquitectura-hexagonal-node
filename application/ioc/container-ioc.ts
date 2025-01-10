
export class ContainerIOC {
    private static containerMap = new Map();

    static container(key: string, value: any) { 
        this.containerMap.set(key, value);
    }

    static inject(key: string) {
        return this.containerMap.get(key);
    }

    static exist(key: string) {
        return this.containerMap.has(key);
    }

    static showContainer() {
        console.log(this.containerMap);
    }
}
