function Arrancar_robot_segundosvelocidad (segundos: number, velocidad: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M4, 0)
    basic.pause(segundos * 1000)
    neZha.stopMotor(neZha.MotorList.M1)
    neZha.stopMotor(neZha.MotorList.M4)
}
function Seguir_lineas_segundosvelocidad (segundos: number, velocidad: number) {
    end = control.millis() / 1000 + segundos
    while (control.millis() / 1000 < segundos) {
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
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M4, 0)
}
let end = 0
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
Seguir_lineas_segundosvelocidad(3, 30)
