function showMessage(project) {

    if (project === "Arduino") {
        document.body.innerHTML = `
            <h1>🤖 Arduino Projects</h1>
            <p>Choose a project:</p>

            <button onclick="openProject('nightlight')">💡 Automatic Night Light</button>
            <button onclick="openProject('traffic')">🚦 Traffic Light</button>
            <button onclick="openProject('reaction')">🎮 Reaction Game</button>
            <button onclick="openProject('distance')">📏 Distance Meter</button>

            <button onclick="location.reload()">← Back</button>
        `;
    }

    else if (project === "Robotics") {
        document.body.innerHTML = `
            <h1>🦾 Robotics Projects</h1>
            <p>Choose a robot project:</p>

            <button onclick="openProject('obstacle')">
                🚗 Obstacle Avoiding Robot
            </button>

            <button onclick="openProject('bluetooth')">
                📡 Bluetooth Robot Car
            </button>

            <button onclick="openProject('arm')">
                🦾 Robotic Arm
            </button>

            <button onclick="openProject('line')">
                ➖ Line Following Robot
            </button>

            <button onclick="location.reload()">← Back</button>
        `;
    }

    else if (project === "LED Projects") {
        alert("💡 LED Projects are coming next!");
    }

    else {
        alert("⚙️ " + project + " projects are coming next!");
    }
}


function openProject(project) {

    // =========================
    // AUTOMATIC NIGHT LIGHT
    // =========================

    if (project === "nightlight") {

        document.body.innerHTML = `
            <h1>💡 Automatic Night Light</h1>

            <h2>🧰 Parts</h2>
            <p>Arduino Uno</p>
            <p>LDR sensor</p>
            <p>LED</p>
            <p>220Ω resistor</p>
            <p>10kΩ resistor</p>
            <p>Jumper wires</p>

            <h2>🔌 Wiring</h2>
            <p>LDR → A0</p>
            <p>LED → Pin 9 through 220Ω resistor</p>
            <p>LED cathode → GND</p>

            <h2>📋 Steps</h2>
            <p>1️⃣ Connect the LDR.</p>
            <p>2️⃣ Connect the LED through the resistor.</p>
            <p>3️⃣ Connect GND.</p>
            <p>4️⃣ Upload the code.</p>
            <p>5️⃣ Cover the LDR and watch the LED turn on!</p>

            <h2>💻 Code</h2>

            <pre>
int ldr = A0;
int led = 9;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {

  int light = analogRead(ldr);

  if (light < 500) {
    digitalWrite(led, HIGH);
  } 
  else {
    digitalWrite(led, LOW);
  }
}
            </pre>

            <button onclick="showMessage('Arduino')">← Arduino Projects</button>
        `;
    }


    // =========================
    // TRAFFIC LIGHT
    // =========================

    else if (project === "traffic") {

        document.body.innerHTML = `
            <h1>🚦 Arduino Traffic Light</h1>

            <h2>🧰 Parts</h2>
            <p>Arduino Uno</p>
            <p>🔴 Red LED</p>
            <p>🟡 Yellow LED</p>
            <p>🟢 Green LED</p>
            <p>3 × 220Ω resistors</p>
            <p>Jumper wires</p>

            <h2>🔌 Wiring</h2>
            <p>Red LED → Pin 10 through resistor</p>
            <p>Yellow LED → Pin 9 through resistor</p>
            <p>Green LED → Pin 8 through resistor</p>
            <p>LED cathodes → GND</p>

            <h2>📋 Steps</h2>
            <p>1️⃣ Connect the three LEDs.</p>
            <p>2️⃣ Add a resistor to each LED.</p>
            <p>3️⃣ Connect the LEDs to the Arduino.</p>
            <p>4️⃣ Connect GND.</p>
            <p>5️⃣ Upload the code.</p>

            <h2>💻 Code</h2>

            <pre>
int red = 10;
int yellow = 9;
int green = 8;

void setup() {

  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);

}

void loop() {

  digitalWrite(red, HIGH);
  delay(3000);
  digitalWrite(red, LOW);

  digitalWrite(yellow, HIGH);
  delay(1000);
  digitalWrite(yellow, LOW);

  digitalWrite(green, HIGH);
  delay(3000);
  digitalWrite(green, LOW);

}
            </pre>

            <button onclick="showMessage('Arduino')">← Arduino Projects</button>
        `;
    }


    // =========================
    // REACTION GAME
    // =========================

    else if (project === "reaction") {

        document.body.innerHTML = `
            <h1>🎮 Reaction Game</h1>

            <h2>🧰 Parts</h2>
            <p>Arduino Uno</p>
            <p>LED</p>
            <p>Push button</p>
            <p>220Ω resistor</p>
            <p>10kΩ resistor</p>
            <p>Jumper wires</p>

            <h2>🔌 Wiring</h2>
            <p>LED → Pin 8 through 220Ω resistor</p>
            <p>Button → Pin 2</p>
            <p>Button → GND using a 10kΩ resistor</p>

            <h2>📋 Steps</h2>
            <p>1️⃣ Connect the LED.</p>
            <p>2️⃣ Connect the push button.</p>
            <p>3️⃣ Connect the resistors.</p>
            <p>4️⃣ Upload the code.</p>
            <p>5️⃣ Wait for the LED.</p>
            <p>6️⃣ Press the button when it lights up!</p>

            <h2>💻 Code</h2>

            <pre>
int led = 8;
int button = 2;

void setup() {

  pinMode(led, OUTPUT);
  pinMode(button, INPUT);

}

void loop() {

  digitalWrite(led, LOW);

  delay(2000);

  digitalWrite(led, HIGH);

  while (digitalRead(button) == LOW) {
  }

  digitalWrite(led, LOW);

  delay(2000);

}
            </pre>

            <button onclick="showMessage('Arduino')">← Arduino Projects</button>
        `;
    }


    // =========================
    // DISTANCE METER
    // =========================

    else if (project === "distance") {

        document.body.innerHTML = `
            <h1>📏 Distance Meter</h1>

            <h2>🧰 Parts</h2>
            <p>Arduino Uno</p>
            <p>HC-SR04 ultrasonic sensor</p>
            <p>Jumper wires</p>

            <h2>🔌 Wiring</h2>
            <p>VCC → 5V</p>
            <p>GND → GND</p>
            <p>TRIG → Pin 9</p>
            <p>ECHO → Pin 10</p>

            <h2>📋 Steps</h2>
            <p>1️⃣ Connect VCC to 5V.</p>
            <p>2️⃣ Connect GND to GND.</p>
            <p>3️⃣ Connect TRIG to pin 9.</p>
            <p>4️⃣ Connect ECHO to pin 10.</p>
            <p>5️⃣ Upload the code.</p>
            <p>6️⃣ Open Serial Monitor.</p>

            <h2>💻 Code</h2>

            <pre>
int trig = 9;
int echo = 10;

void setup() {

  Serial.begin(9600);

  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);

}

void loop() {

  digitalWrite(trig, LOW);
  delayMicroseconds(2);

  digitalWrite(trig, HIGH);
  delayMicroseconds(10);

  digitalWrite(trig, LOW);

  long duration = pulseIn(echo, HIGH);

  float distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(500);

}
            </pre>

            <button onclick="showMessage('Arduino')">← Arduino Projects</button>
        `;
    }


    // =========================
    // OBSTACLE AVOIDING ROBOT
    // =========================

    else if (project === "obstacle") {

        document.body.innerHTML = `
            <h1>🚗 Obstacle Avoiding Robot</h1>

            <h2>🧰 Parts</h2>
            <p>Arduino Uno</p>
            <p>HC-SR04 ultrasonic sensor</p>
            <p>L298N motor driver</p>
            <p>2 DC motors</p>
            <p>Robot chassis</p>
            <p>Wheels</p>
            <p>Battery pack</p>
            <p>Jumper wires</p>

            <h2>🔌 Main Wiring</h2>
            <p>HC-SR04 TRIG → Arduino Pin 9</p>
            <p>HC-SR04 ECHO → Arduino Pin 10</p>
            <p>L298N IN1 → Pin 5</p>
            <p>L298N IN2 → Pin 6</p>
            <p>L298N IN3 → Pin 7</p>
            <p>L298N IN4 → Pin 8</p>
            <p>Motors → L298N motor outputs</p>
            <p>Arduino GND and motor-driver GND must be connected together.</p>

            <h2>📋 Steps</h2>
            <p>1️⃣ Build the robot chassis.</p>
            <p>2️⃣ Attach both motors and wheels.</p>
            <p>3️⃣ Connect the motors to the L298N.</p>
            <p>4️⃣ Connect the ultrasonic sensor.</p>
            <p>5️⃣ Connect the Arduino to the motor driver.</p>
            <p>6️⃣ Upload the code.</p>
            <p>7️⃣ Test the robot on a clear surface.</p>

            <h2>💻 Code</h2>

            <pre>
int trig = 9;
int echo = 10;

int IN1 = 5;
int IN2 = 6;
int IN3 = 7;
int IN4 = 8;

void setup() {

  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);

  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);

}

long getDistance() {

  digitalWrite(trig, LOW);
  delayMicroseconds(2);

  digitalWrite(trig, HIGH);
  delayMicroseconds(10);

  digitalWrite(trig, LOW);

  long duration = pulseIn(echo, HIGH);

  return duration * 0.034 / 2;
}

void forward() {

  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);

}

void stopRobot() {

  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);

}

void turnRight() {

  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);

}

void loop() {

  long distance = getDistance();

  if (distance > 20) {

    forward();

  } else {

    stopRobot();
    delay(300);

    turnRight();
    delay(500);

  }

}
            </pre>

            <button onclick="showMessage('Robotics')">← Robotics</button>
        `;
    }


    // =========================
    // BLUETOOTH ROBOT CAR
    // =========================

    else if (project === "bluetooth") {

        document.body.innerHTML = `
            <h1>📡 Bluetooth Robot Car</h1>

            <h2>🧰 Parts</h2>
            <p>Arduino Uno</p>
            <p>HC-05 Bluetooth module</p>
            <p>L298N motor driver</p>
            <p>2 DC motors</p>
            <p>Robot chassis</p>
            <p>Battery pack</p>
            <p>Jumper wires</p>

            <h2>🔌 Wiring</h2>
            <p>HC-05 TX → Arduino RX</p>
            <p>HC-05 RX → Arduino TX through an appropriate voltage divider</p>
            <p>L298N IN1 → Pin 5</p>
            <p>L298N IN2 → Pin 6</p>
            <p>L298N IN3 → Pin 7</p>
            <p>L298N IN4 → Pin 8</p>

            <h2>📋 Steps</h2>
            <p>1️⃣ Build the robot chassis.</p>
            <p>2️⃣ Connect the motors to the motor driver.</p>
            <p>3️⃣ Connect the Bluetooth module.</p>
            <p>4️⃣ Upload the code.</p>
            <p>5️⃣ Pair the Bluetooth module with a compatible controller app.</p>
            <p>6️⃣ Send movement commands.</p>

            <h2>💻 Code</h2>

            <pre>
char command;

int IN1 = 5;
int IN2 = 6;
int IN3 = 7;
int IN4 = 8;

void setup() {

  Serial.begin(9600);

  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);

}

void forward() {

  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);

}

void backward() {

  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);

  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);

}

void stopRobot() {

  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);

}

void loop() {

  if (Serial.available()) {

    command = Serial.read();

    if (command == 'F') {
      forward();
    }

    else if (command == 'B') {
      backward();
    }

    else if (command == 'S') {
      stopRobot();
    }

  }

}
            </pre>

            <button onclick="showMessage('Robotics')">← Robotics</button>
        `;
    }


    // =========================
    // ROBOTIC ARM
    // =========================

    else if (project === "arm") {

        document.body.innerHTML = `
            <h1>🦾 Robotic Arm</h1>

            <h2>🧰 Parts</h2>
            <p>Arduino Uno</p>
            <p>3 servo motors</p>
            <p>Robotic arm structure</p>
            <p>Jumper wires</p>
            <p>External 5V supply recommended for multiple servos</p>

            <h2>🔌 Wiring</h2>
            <p>Servo 1 signal → Pin 3</p>
            <p>Servo 2 signal → Pin 5</p>
            <p>Servo 3 signal → Pin 6</p>
            <p>Servo power → suitable 5V supply</p>
            <p>Servo GND → GND</p>
            <p>Connect the external supply GND to Arduino GND.</p>

            <h2>📋 Steps</h2>
            <p>1️⃣ Assemble the arm.</p>
            <p>2️⃣ Attach the servos.</p>
            <p>3️⃣ Connect the servo signal wires.</p>
            <p>4️⃣ Connect power and common GND.</p>
            <p>5️⃣ Upload the code.</p>
            <p>6️⃣ Adjust the servo angles for your arm.</p>

            <h2>💻 Code</h2>

            <pre>
#include &lt;Servo.h&gt;

Servo base;
Servo arm;
Servo claw;

void setup() {

  base.attach(3);
  arm.attach(5);
  claw.attach(6);

  base.write(90);
  arm.write(90);
  claw.write(90);

}

void loop() {

  base.write(45);
  delay(1000);

  arm.write(120);
  delay(1000);

  claw.write(40);
  delay(1000);

  claw.write(90);
  delay(1000);

  arm.write(90);
  delay(1000);

  base.write(90);
  delay(1000);

}
            </pre>

            <button onclick="showMessage('Robotics')">← Robotics</button>
        `;
    }


    // =========================
    // LINE FOLLOWING ROBOT
    // =========================

    else if (project === "line") {

        document.body.innerHTML = `
            <h1>➖ Line Following Robot</h1>

            <h2>🧰 Parts</h2>
            <p>Arduino Uno</p>
            <p>2 IR line sensors</p>
            <p>L298N motor driver</p>
            <p>2 DC motors</p>
            <p>Robot chassis</p>
            <p>Wheels</p>
            <p>Battery pack</p>

            <h2>🔌 Wiring</h2>
            <p>Left IR sensor → Pin 2</p>
            <p>Right IR sensor → Pin 3</p>
            <p>L298N IN1 → Pin 5</p>
            <p>L298N IN2 → Pin 6</p>
            <p>L298N IN3 → Pin 7</p>
            <p>L298N IN4 → Pin 8</p>

            <h2>📋 Steps</h2>
            <p>1️⃣ Build the robot chassis.</p>
            <p>2️⃣ Attach the motors.</p>
            <p>3️⃣ Mount the two IR sensors near the ground.</p>
            <p>4️⃣ Connect the motor driver.</p>
            <p>5️⃣ Upload the code.</p>
            <p>6️⃣ Place the robot over a suitable line track.</p>

            <h2>💻 Code</h2>

            <pre>
int leftSensor = 2;
int rightSensor = 3;

int IN1 = 5;
int IN2 = 6;
int IN3 = 7;
int IN4 = 8;

void setup() {

  pinMode(leftSensor, INPUT);
  pinMode(rightSensor, INPUT);

  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);

}

void forward() {

  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);

}

void left() {

  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);

}

void right() {

  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);

}

void stopRobot() {

  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);

}

void loop() {

  int leftValue = digitalRead(leftSensor);
  int rightValue = digitalRead(rightSensor);

  if (leftValue == LOW && rightValue == LOW) {
    forward();
  }

  else if (leftValue == HIGH && rightValue == LOW) {
    left();
  }

  else if (leftValue == LOW && rightValue == HIGH) {
    right();
  }

  else {
    stopRobot();
  }

}
            </pre>

            <button onclick="showMessage('Robotics')">← Robotics</button>
        `;
    }

}