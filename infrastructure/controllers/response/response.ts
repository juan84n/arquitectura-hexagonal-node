export class ResponseEntity<T> {
  private readonly status: number = 0;
  private readonly response: T = {} as any;

     constructor (status: number, response: T) {
        this.status = status;
        this.response = response;
     }

    getStatus() {
        return this.status ;
    }

    getResponse() {
        return this.response;
    }

}