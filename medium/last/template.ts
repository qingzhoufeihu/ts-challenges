// type Last<T extends any[]> = 
type Last<T extends any[]>= [any,...T][T['length']]