
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=200 color=#ff0000 icon="\uf188"
namespace เก้า {
    /**
     * สำหรับ นับค่า Encoder จากขา P8 
     */
    //% block 
    export function เก้า(temp: number) {
        basic.showNumber(temp)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(1000)
    }
}
