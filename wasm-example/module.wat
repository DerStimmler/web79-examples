(module
  ;; Importiere die log Funktion von "namespace"
  (import "namespace" "log" (func $log (param i32)))

  ;; Definiere die add Funktion, die zwei 32-Bit Ganzzahlen (i32) addiert
  (func $add (param $num1 i32) (param $num2 i32) (result i32)
    ;; Addiere die beiden Parameter
    local.get $num1
    local.get $num2
    i32.add

    ;; Dupliziere das Ergebnis, 
    ;; speichere es in einer lokalen Variablen und lasse es auf dem Stack
    local.tee 0

    ;; Rufe die log-Funktion mit dem Ergebnis auf
    local.get 0
    call $log

    ;; Das Ergebnis ist immer noch auf dem Stack und wird zurückgegeben
  )

  ;; Exportiere die add Funktion
  (export "add" (func $add))
)