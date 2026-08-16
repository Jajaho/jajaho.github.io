---
title: Looping Louie
date: 2022-09-25
tags:
  - modification
  - electronics
  - games
draft: true
featured: false
---

Looping Louie is a great game for kids and drunk adults alike. But for still somewhat sober players, the game can be rather underwhelming. In this article, a solution to this problem is proposed, the success of which shall be measured in field experiments by the following two criteria:
1. General fun should be increased
2. Time to drunk (tod) decreased

Additionally the introduction of a control unit gives one player or supervisor power over the rotational speed and direction of the airplane arm, enabling targeted attacks on a player's chips.


{{< figure src="case_and_motor.jpg" caption="The modified motor and control case" >}}
{{< figure src="inside.jpg" caption="Inside view of the speed controller circuit" >}}

## specifications

- Supply voltage: 9 VDC
- Maximum current: 1.25 A
- Duty cycle range: 16 – 72 %

## components

**Quad op-amp:** TL054M BiFET, designed for use with dual power supplies!  
**Drive transistor:** IRFZ44 N-channel MOSFET

## measurements

Vpp, idle = 80 mV Vpp ripple on the 9 V rail

## potential problems

### problem 1

On startup, a big 470 uF capacitor causes a big inrush current. On a current-limited laboratory power supply, this makes the supply go into a constant current mode which charges the capacitor linearly. On a cheap wall plug, this could cause its fuse to blow.

#### Troubleshooting

After connecting a USB-PD charger to the type-c port of the trigger board there was no voltage on the power rails. The first suspicion was a faulty trigger board. But after disconnecting the trigger from the circuit and hooking it up to a Rigol DL3021 electronic load up to 3 A could be drawn from it at 9 V. Testing for continuity also made sure that there was no open circuit on the rails and also no short between them. Trying a second trigger board of the same type I hooked it up to the electronic load and the circuit in parallel to monitor voltage with no success. The next theory was that there must not be a load connected on startup but even with a constant current load of 1.5 A connected to its output it started up with no problems. Then I started plugging in and unplugging the type-c cable repeatedly. I swapped the cable orientation and suddenly it worked, there was 9 V on the rails. So I concluded (prematurely) that the manufacturer of the trigger failed to implement the type-c line correctly. But after a short rant and break the circuit again failed to power up and I was back to square one. So I tried a different trigger board of a different type. The open circuit voltage of the new trigger checked out but when I connected it to my circuit it also shut down, indicated by its power LED fading. It struck me, the 470 uF capacitor must cause a big inrush current which was a non-issue when I tested it with a laboratory power supply with current limiting but which must cause the board to shut down. Removing the capacitor confirmed this theory and the circuit worked without a hitch. To smooth the power rail a small 10 uF capacitor replaced the previous large one. The pictures below show the supply rail while the motor is connected with the added 10 uF capacitor.

{{< figure src="min_load_9V_clip.png" caption="9 V power rail at minimum load, Vpp = 3.12 V" >}}
{{< figure src="max_load_9V_clip.png" caption="9 V power rail at maximum load, Vpp = 3.40 V" >}}

#### proposed solutions:

- Constant current regulator at the supply input.
- Polyfuse (a heavily temperature-dependent resistor)
- **Smaller capacitor** 

### problem 2

Reversing the motor polarity causes a big current surge that might cause the power supply to shut down - non-issue in practice.





