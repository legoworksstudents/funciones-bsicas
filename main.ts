function Arrancar_robot_segundosvelocidad (segundos: number, velocidad: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M4, 0)
    basic.pause(segundos * 1000)
    neZha.stopMotor(neZha.MotorList.M1)
    neZha.stopMotor(neZha.MotorList.M4)
}
function Seguir_lineas_segundosvelocidad (segundos: number, velocidad: number) {
    cronometro = 0
    while (cronometro < segundos) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, velocidad)
            neZha.setMotorSpeed(neZha.MotorList.M4, velocidad)
        }
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, velocidad)
            neZha.setMotorSpeed(neZha.MotorList.M4, 0)
        }
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 0)
            neZha.setMotorSpeed(neZha.MotorList.M4, velocidad)
        }
    }
    neZha.stopMotor(neZha.MotorList.M1)
    neZha.stopMotor(neZha.MotorList.M4)
}
let cronometro = 0
Seguir_lineas_segundosvelocidad(1, 30)
Arrancar_robot_segundosvelocidad(1, 30)
loops.everyInterval(1000, function () {
    cronometro += 1
})
basic.forever(function () {
	
})
