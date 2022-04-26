//Importo el modelo Habitacion
import {modeloReserva} from '../models/reservaModelo'

class ServicioReserva{
    
    constructor(){}


    async buscarPorId(id){

        let reserva=await modeloReserva.findById(id)
        return reserva

    }

    async insertar(reserva){

        let reservaNueva=new modeloHabitacion(reserva)
        return await reservaNueva.save()
    }

    async editar(id,reserva){

        return await modeloReserva.findByIdAndUpdate(id,reserva)
    }

    async eliminar(id){

        return await modeloReserva.findByIdAndDelete(id)
    }



}