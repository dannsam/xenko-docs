# Script a trigger

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

In this tutorial, we'll create a **trigger** that doubles the size of a ball when the ball passes through it.

## 1. Create a bouncing ball

1. Follow the instructions in the [Create a bouncing ball](create-a-bouncing-ball.md) tutorial. This gives us a simple scene in which a ball falls from mid-air, hits the ground, and bounces.

    ![Bouncing effect](media/physics-tutorials-create-a-bouncing-ball-falling-and-bouncing-ball.gif)

## 2. Set the restitution

For this tutorial, we'll set the restitution of both the ground and the sphere to 1, so the ball bounces forever without losing energy. This isn't strictly necessary, but makes it easier to see the effect of the trigger later.

1. Select the **Sphere** entity.

2. In the **Property grid**, under **Rigidbody**, set the **Restitution** to *1*.

    ![Set restitution for a sphere](media/physics-tutorials-rigidbody-restitution.png)

3. Select the **Ground** entity.

4. In the **Property grid**, under **Static Collider**, set the **Restitution** to *1*.

    ![Set restitution for the ground](media/physics-tutorials-static-collider-restitution.png)

This creates a ball that bounces indefinitely, losing no energy:

![Infinite bounce](media/physics-tutorials-create-a-bouncing-ball-infinitely-bouncing-ball.gif)

## 3. Add a trigger 

Now we'll add a trigger between the ball and the ground, so the ball passes through it.

1. In the **Scene editor**, click the white plus sign (**Create new entity**) and select **Empty entity**.

    ![Create new entity](media/physics-tutorials-create-a-trigger-add-new-entity.png)

    Game Studio adds an entity to the scene with the default name **Entity**.

2. This entity will be our trigger, so rename it *Trigger* to make it easy to identify.

3. Since we don't need the trigger to move, we'll make it a static collider. In the **Property grid**, click **Add component** and select **Static Collider**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

4. In the **Property grid**, expand the **Static Collider component** to view its properties.

5. Check the **Is Trigger** checkbox.

    ![Check 'Is trigger'](media/physics-tutorials-create-a-trigger-is-trigger-checkbox.png)

    This makes the object a trigger. Objects can pass through the collider, but are still detected in the code.

6. We need to give the trigger a shape. Next to **Collider Shapes**, click the **green plus icon** and select **Box**.

    ![Add collider shape](media/physics-tutorials-create-a-trigger-add-box-shape-to-a-trigger.png)

    This creates a box-shaped trigger in the scene.

7. Let's make the trigger a larger area. In the **Property grid**, under the **Transform** component properties, set the **scale** to: *X:2, Y:2, Z:2*

    ![Scale a trigger](media/physics-tutorials-create-a-trigger-scale-trigger.png)

## 4. Position the trigger 

We need to position the trigger between the ground and the sphere, so the ball falls through it.
    
In the **Property grid**, under **Transform**, set the **Position** to: *X:0, Y:3, Z:0*

Now the trigger entity is between the ground and the sphere:

![Trigger between ground and sphere](media/physics-tutorials-create-a-trigger-trigger-between-ground-and-sphere.png)

## 5. Change the sphere size with script

If we run the project now (**F5**), the ball falls through the trigger, but nothing happens. Note that the trigger is invisible, as we didn't give it a graphical component.

![Infinite bounce](media/physics-tutorials-create-a-bouncing-ball-infinitely-bouncing-ball.gif)

Let's write a script to change the size of the ball when it enters the trigger.

>[!Note]
>For more information about scripts, see [Scripts](../scripts/index.md).

1. In the **Asset view**, click **Add asset** and select **Scripts** > **Async Script**.

    ![Add a script](media/physics-tutorials-create-a-trigger-add-async-script.png)

2. In the **Script wizard** dialog, name your script *Trigger* and click **OK**.

    2a. If Game Studio asks if you want to save your script, click **Yes**.
    
    2b. If Game Studio asks if you want to reload the assemblies, click **Yes**.

3. Open the script, replace its content with the following code, and build your solution:

    ```
    using SiliconStudio.Xenko.Engine;
    using SiliconStudio.Xenko.Physics;
    using System.Threading.Tasks;
    using SiliconStudio.Core.Mathematics;

    namespace TransformTrigger
    // You can use any namespace you like for this script.
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

## 6. Add the script

Finally, let's add this script to the trigger entity as a component.

1. In **Game Studio**, select the **Trigger** entity.

2. In the **Property grid**, click **Add component** and select the **Trigger** script.

    ![Add script component to entity](media/physics-tutorials-create-a-trigger-add-script-component-to-entity.png)

## 7. Run the project

Run the project (**F5**) to see the trigger in action.

The ball falls through the trigger, doubles in size, exits the trigger, and returns to its normal size.

![Ball passes through trigger](media/physics-tutorials-create-a-trigger-ball-passes-trigger.gif)

## See also

* [Tutorial: Create a bouncing ball](create-a-bouncing-ball.md)
* [Colliders](colliders.md)
* [Collider shapes](collider-shapes.md)
* [Scripts](../scripts/index.md)