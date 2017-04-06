# Light probes

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Artist</span>

**Light probes** capture the lighting at the position you place them. They simulate **indirect light**, the effect of light bouncing off surfaces and illuminating other surfaces. They can make a dramatic difference to the mood and appearance of your scene.

![Light probes on and off](media/light-probes-on-and-off.jpg)

The screenshot below shows a [point light](point-lights.md) surrounded by light probes in the scene editor. The probes form 3D areas (shown in the scene editor by the yellow wireframe connecting the probes).

![Cornell box](media/light-probes-cornell.png)

Xenko colors pixels within a light probe area to simulate the effect of light bouncing from nearby surfaces. To find a color for a given pixel, Xenko interpolates from the lighting captured by the four surrounding light probes.

For example, in the screenshot below, notice how the red of the wall is reflected on the other objects. In the scene editor, this is also visible on the surface of the light probes themselves.

![Light probes - more reflection](media/light-probes-illumination.png)

Light probes affect all objects in the area they cover, including static and dynamic objects. You don't need to enable any extra options on the entities that light probes affect.

## 1. Create a light probe

Right-click the scene or entity tree and select **Light > Light probe**.

![Add light probe](media/add-light-probe.png)

Alternatively, create an empty entity and add a **Light probe component** in the property grid.

![Add light probe component](media/add-light-probe-component.png)

Light probes appear as spheres in the scene editor. Before you capture a light bounce for the the first time, they have a completely black surface.

![Light](media/light-probes-black.jpg)

>[!Tip]
>You can quickly duplicate light probes just like other entities. To do this, select a light probe, hold Ctrl, and move it with the mouse.

## 2. Place light probes

Light probes must be placed in a way that creates a **3D volume**. This means:

* you need at least four light probes in the scene - enough to create the four points of a tetrahedron, as below:

    ![Tetrahedron](media/light-probes-tetrahedron.png)

* you can't place light probes on a single (ie 2D) plane. For example, the probes in this screenshot won't work, as they are on a flat plane and create no volume:

    ![Flat probes](media/bad-light-probe-arrangement.png)

A typical strategy is to place light probes in a grid across your scene covering a general area, as in the screenshots below:

![Grid layout](media/light-probes-grid-layout.jpg)

![Light probes in the editor](media/light-probes-in-editor.jpg)

## 3. Capture light bounces

In the scene editor toolbar, click the **new light bounce** button. This:

* clears existing light bounces
* generates a new light bounce

>[!Tip]
>If you change the light sources in your scene, click **new light bounce** again to remove the old lighting and capture the new lighting.

After you create the first light bounce, click the **generate additional light bounce** button. This bounces the light again, simulating the effect of light bouncing back and forth between surfaces multiple times, and increasing the realism of the light bounces.

You can click the bounce button as many times as you want without affecting performance. However, this has diminishing returns; after a few bounces, the changes become unnoticeable. Three or four bounces should be enough.

## Show and hide light probes in the scene editor

Under the **gizmo options** in the scene editor toolbar, use the **Light probes** checkbox.

You can still see the effect of the light probes in the scene editor.

## Show and hide light probe wireframe in the scene editor

Under the gizmo options in the scene editor toolbar, use the **Light probe wireframe** checkbox.

![Light probe wireframe on](media/light-probe-wireframe-on.jpg)

## See also

* [Add a light](add-a-light.md)
* [Point lights](point-lights.md)
* [Ambient lights](ambient-lights.md)
* [Directional lights](directional-lights.md)
* [Skybox lights](skybox-lights.md)
* [Spot lights](spot-lights.md)
* [Shadows](shadows.md)