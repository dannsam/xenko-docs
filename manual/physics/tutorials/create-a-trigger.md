# Script a triggered event

<div class="doc-incomplete"/>

**Triggers** are [static colliders](static-colliders.md) that detect collision, but don't affect the objects they collide with. When a static collider is a trigger, other objects no longer collide with it. Instead they pass through it, **triggering** an event which you can detect in your code. For example, you can use a trigger to detect when a player character enters ("collides" with) a room, and use this in your script to trigger an event.

In this tutorial, we'll create a trigger that doubles the size of a ball when the ball passes through it.

## 1. Add a trigger

1. Follow the instructions in the [Create a bouncing ball](create-a-bouncing-ball.md) tutorial.
This gives us a simple scene in which a ball falls from mid-air, hits the ground, and bounces.

2. For the purposes of this tutorial, set the restitution of both the sphere and the ground to 1, so the ball bounces indefinitely without losing energy:

    ![Infinite bounce](media/physics-tutorials-create-a-bouncing-ball-infinitely-bouncing-ball.gif)

    This will make it easier to see the effect of the trigger later.

Now we'll add a trigger in the space between the ball and the ground, so the ball passes through it.

1. In the **Scene editor**, click the white plus sign (**Create new entity**) and select **Empty entity**.

    ![Create new entity](media/physics-tutorials-create-a-trigger-add-new-entity.png)

Game Studio adds an entity to the scene with the default name **Entity**.

2. Rename the entity _Trigger_.

3. In the **Property grid**, click **Add component** and select **Static Collider**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

4. In the **Property grid**, expand the **Static Collider component** to view its properties.

5. Check the **Is Trigger** checkbox.

    ![Check 'Is trigger'](media/physics-tutorials-create-a-trigger-is-trigger-checkbox.png)

    This means objects can pass through the collider, but are still detected in the code.

6. We need to give the trigger a shape. Next to **Collider Shapes**, click the **green plus icon** and select **Box**.

    ![Add collider shape](media/physics-tutorials-create-a-trigger-add-box-shape-to-a-trigger.png)

7. Let's make the trigger a larger area. In the **Property grid**, under **Transform**, set the **scale** to: _X:2, Y:2, Z:2_

    ![Scale a trigger](media/physics-tutorials-create-a-trigger-scale-trigger.png)

We need to position the trigger between the ground and the sphere, so the ball falls through it.
    
8. With the trigger entity selected, in the **Property grid**, under **Transform**, set the **Position** to: _X:0, Y:3, Z:0_

    Now the trigger entity is between the ground and the sphere:

    ![Trigger between ground and sphere](media/physics-tutorials-create-a-trigger-trigger-between-ground-and-sphere.png)

## 2. Handle the trigger event with script

If we run the project now (**F5**), the ball falls through the trigger, but nothing happens. Note that the trigger is invisible, as we didn't give it a graphical component.

![Infinite bounce](media/physics-tutorials-create-a-bouncing-ball-infinitely-bouncing-ball.gif)

Let's write a script to change the size of the ball when it enters the trigger.

1. In the **Asset view**, click **Add asset** and select **Scripts** > **Async Script**.

    ![Add a script](media/physics-tutorials-create-a-trigger-add-async-script.png)

2. In the **Script wizard** dialog, name your script (eg _Trigger_) and click **OK**.

    2a. If Game Studio asks if you want to save your script, click **Yes**.
    
    2b. If Game Studio asks if you want to reload the assemblies, click **Yes**.

3. Open the script, add the following code, and build your solution:

    ```
    using SiliconStudio.Xenko.Engine;
    using SiliconStudio.Xenko.Physics;
    using System.Threading.Tasks;
    using SiliconStudio.Core.Mathematics;

    namespace VolumeTrigger
    {
        public class Trigger : AsyncScript
        {
            public override async Task Execute()
            {
                var trigger = Entity.Get<PhysicsComponent>();
                trigger.ProcessCollisions = true;

                // Start state machine
                while (Game.IsRunning)
                {
                    // 1. Wait for an entity to collide with the trigger
                    var firstCollision = await trigger.NewCollision();

                    var otherCollider = trigger == firstCollision.ColliderA
                        ? firstCollision.ColliderB
                        : firstCollision.ColliderA;
                    otherCollider.Entity.Transform.Scale = new Vector3(2.0f, 2.0f, 2.0f);

                    // 2. Wait for the entity to exit the trigger
                    Collision collision;

                    do
                    {
                        collision = await trigger.CollisionEnded();
                    }
                    while (collision != firstCollision);

                    otherCollider.Entity.Transform.Scale= new Vector3(1.0f, 1.0f, 1.0f);
                }
            }
        }
    }
    ```

    This code doubles the size (scale) of any entity that enters the trigger. When the entity exits the trigger, it returns to its original size.

Finally, let's add this script to the trigger entity as a component.

4. Back in **Game Studio**, select the trigger entity.

5. In the **Property grid**, click **Add component** and select the **Trigger** script.

    ![Add script component to entity](media/physics-tutorials-create-a-trigger-add-script-component-to-entity.png)

5. Run the project (**F5**) to see the trigger in action.
The ball falls through the trigger, doubles in size, exits the trigger, and returns to its normal size.

     ![Ball passes through trigger](media/physics-tutorials-create-a-trigger-ball-passes-trigger.gif)