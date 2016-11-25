# Triggers

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

If you set a rigid body collider to be a **trigger**, objects no longer bump into it.
Instead, the trigger detects when objects pass through it. 

You can use this to script events.
For example, you can use a trigger to detect when a player character enters a room, and use this in your script to trigger an event.

Only a **rigid body collider** can be a trigger.
To make a trigger, in the **Property grid**, under the component properties, select **Is Trigger**.

![Check 'Is trigger'](media/triggers-select-is-trigger-checkbox.png)

For an example of how to use triggers, see the [Script a triggered event](tutorials/script-a-triggered-event.md) tutorial.