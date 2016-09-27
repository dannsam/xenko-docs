#Sensors

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Level Programmer</span>

Xenko supports various sensors that you can use as **Input Devices** in your games. Sensors provide functionality that is extensively used in racing, arcade, and many other mobile games.
Use ```Input``` base class to access sensors:

* Check if a particular sensor is supported by Xenko.
* Disable a particular sensor.
* Retrieve the data provided by a particular sensor.

##Check Availability

Xenko has a separate class for each supported sensor type. All sensor classes are inherited from the ``SensorBase`` class.

Before handling input from any sensor, it's important to check if it is available in the system.
You can do that with the ```SensorBase``` base class and its properties:

| Property | Description |
|----|----|
| IsEnabled | Gets or sets the sensor enabled state. |
| IsSupported | Gets a Boolean value (true/false) if the sensor is available on the current device. |

**Syntax**: ```bool IsEnabled = SensorBase. Orientation Sensor; ```

##Use Orientation Sensor

**Orientation sensor** lets you monitor device position relative to the Earth's magnetic North Pole. You can use that data to control various actions in a game.

Suppose, you are handling a smartphone. Once you tilt the phone, orientation sensor registers phone's position change in the X, Y, and Z axes.
You can use this data to animate game elements according to the tilt.

The following image displays how orientation sensor works on smartphones:

![Orientation sensor](media/sensor-overview-orientation-sensor.png)

_Orientation sensor_

```Orientation Sensor``` class handles all input from the orientation sensor. Use its properties to handle **Orientation Sensor Input**:

| Property        | Description                                     | Declaration                                 |
|-----------------|-------------------------------------------------|---------------------------------------------|
| Roll            | Rotation around the Ox axis.                    | ```public float Roll { get; }```            |
| Pitch           | Rotation around the Oy axis.                    | ```public float Pitch { get; }```           |
| Yaw             | Rotation around the Oz axis.                    | ```public float Yaw { get; }```             |
| Rotation Matrix | Current rotation of the device.                 | ```public Matrix RotationMatrix { get; }``` |
| Quaternion      | Current orientation and rotation of the device. | ```public Quaternion Quaternion { get; }``` |

The following is a sample code that has all the properties of the ```Orientation Sensor``` class:

```
  var orientation = Input.Orientation;
                var pitch = orientation.Pitch;
                var quaternion = orientation.Quaternion;
                var roll = orientation.Roll;
                var rotationMatrix = orientation.RotationMatrix;
                var yaw = orientation.Yaw;

```

##Use Motion Sensors
**Motion sensors** help you monitor device movement, such as tilt, shake, rotation, and swing. Xenko Supports three types of motion sensors:

* Accelerometer sensor.
* Gravity sensor.
* UserAcceleration sensor.

Motion sensors measure device orientation in a three-dimensional world.
When a device is in its default orientation, the X-axis is horizontal, the Y-axis is vertical, and the Z-axis points outside the screen face.
The following image displays **Accelerometer**, **UserAcceleration**, and **Gravity** sensors:

![Motion Sensors](media/sensor-overview-accelerometer-acceleration-gravity.png)

_Accelerometer, User Acceleration, and Gravity sensors_

###Use Accelerometer

**Accelerometer** measures acceleration applied on the device, including gravity and user acceleration.

The following image displays the Accelerometer sensor for various devices.

![ Accelerometer](media/sensor-overview-accelerometer-sensor.png)

_Accelerometer sensor_

```AccelerometerSensor``` class has the **Acceleration** property that checks current acceleration applied on the device (m/s2).

As example, suppose you put device on a flat table, and then move it:

* Move right: acceleration in the X direction; get this value by ``acceleration.X``.
* Move away from you: acceleration in the Y direction; get this value by ``acceleration.Y``.
* Move towards the sky: acceleration in the Z direction; get this value by ``acceleration.Z``.
* Device is stationary: only gravitational force affects on the device. Hence, the device will have an acceleration value of +9.81 (9.81 is the default force of gravity applied on the device).

The following sample script checks if the sensor is available on the device, gets the reference of the sensor, gets the acceleration applied, and disables the sensor:

```
// get the Accelerometer reference in your code
var accelerometer = Input.Accelerometer;

//check if Accelerometer is available on current device 
bool isAccelerometerSupported = accelerometer.IsSupported; 

//Get the acceleration applied on current device
var acceleration = accelerometer.Acceleration;

//to disable the Accelerometer on current device
accelerometer.IsEnabled = false;


```

###Use Gravity Sensor

```GravitySensor``` class measures the gravity force applied on a device.

The gravity sensor gives a three-dimensional vector indicating the direction and magnitude of gravity (m/s2).
The following code shows you how to get an instance of the gravity sensor:

```
  var gravitySensor = Input.Gravity;
 var gravity = gravitySensor.Vector;
```

###Use User Acceleration Sensor
**User Acceleration Sensor** sensor is similar to Accelerometer, but it measures the acceleration applied only by a user (without gravitational acceleration).

In Xenko, the ```UserAccelerationSensor``` class represents a user acceleration sensor.
It measures the acceleration applied by a user (no gravity) on the device.

You can get the ```UserAccelerationSensor``` by the following code:

```
var userAccelerationSensor = Input.UserAcceleration;                        
var userAcceleration1 = userAccelerationSensor.Acceleration;
```

##Use Compass

**Compass** shows the direction to the magnetic North Pole and bearings from it. A digital compass is commonly based on a sensor called 'magnetometer'.
A device with a compass knows where North is, so it can auto-rotate digital maps depending on its physical position.

The following image displays the compass sensor of a smartphone.

![Compass](media/sensor-overview-compasss.png)

_Compass_

``CompassSensor`` class handles input from the **Compass sensor**. It measures the angle between the device's top and the North Pole.

``Heading`` property of the ``CompassSensor`` class gets the angle between the top of the device and the North (in radian).

Declaration: ``public float Heading { get; }``

The following sample shows you how to retrieve data from the **Compass**:

```
var compass = Input.Compass;
var isSupported = compass.IsSupported;
var heading = compass.Heading;
```

##Use Gyroscope
A gyroscope sensor is used for navigation purposes and enables gesture recognition in smartphones and tablets.
It also allows to switch device screen output from portrait to landscape and also use the device orientation in games.

The following image displays the Gyroscope sensor of a smartphone.

![Gyroscope](media/sensor-overview-gyroscope-sensor.png)

_Gyroscope sensor_

**Gyroscope** is similar to **Accelerometer**:

| Sensor | Functionality |
| --- | --- |
| Accelerometer | Measures linear acceleration of the device. |
| Gyroscope | Measures the rotational velocity of the device. |

Similar to the **Accelerometer**, a Gyroscope provides the current rotation speed of the device along the X, Y, or Z axes.
You can get this information using ```RotationRate``` property of the ```GyroscopeSensor``` class.

**Gyroscope** works with **Accelerometer** to detect the rotation of the device. Using Gyroscope, you can achieve auto-rotation of the screen when the user rotates the device.

The following sample shows you how to get an instance of the gyroscope and retrieve the rotation of a device:

```
  var gyroscopeSensor = Input.Gyroscope;
  var rotationRate = gyroscopeSensor.RotationRate; 
  var rotationX =  rotationRate.X;
  var rotationY =  rotationRate.Y;
  var rotationZ =  rotationRate.Z;
```

<div class="doc-relatedtopics">
* [Gestures](gestures.md)
* [Pointers](pointers.md)
</div>
