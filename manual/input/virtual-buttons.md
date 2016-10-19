<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

# Virtual Buttons

**Virtual Buttons** allow smooth customization of the in-game controls.
Rather than binding certain controls to physical buttons, you can create **Virtual Buttons**.
This will allow end-user of your game to assign any buttons and keys to any functions.

Let's see how **Virtual Buttons** work:

1. Suppose you develop an FPS-shooter and need to assign a hotkey for _UseMedkit_ function.
2. Rather than binding that function to a particular key, create a **Virtual Button** called _UseMedkit_.
3. By defualt, bind _UseMedkit_ **Virtual Button** to a physical keyboard **F** key.
4. If a player changes hotkey to **J** at run-time, he/she will be able to use _UseMedkit_ with that newly assigned **J** hotkey.

##Create Virtual Buttons

Here's how you can create **Virtual Buttons** and use them in your game:

1. Bind **M** key to a virtual button _MyButton_.
2. Create a list of **Virtual Buttons**.
3. Add _MyButton_ to this list.
4. Assign a certain function to _MyButton_.
5. Create additional **Virtual Buttons**.
6. Add additional buttons to the same list or create additional lists of **Virtual Buttons**.

You can bind any keys, buttons, and pointers to **Virtual Buttons**.
This page explains how to bind physical keys, buttons, and pointers that are included into Xenko API.

> [!Note] You can bind keys, not included into Xenko API, to Virtual Buttons.
> For instance, Xenko API supports two _Extended Mouse Buttons_.
> At the sane time, you can bind any additional _Extended Buttons_, not included in Xenko API, to Virtual Buttons and use them in your game.
> However, this is an advanced programming topic that is not covered on this page.

##Code Sample

```cs
public override void Start()
{
    base.Start();
    //Bind "M" key to a virtual button "MyButton".
    VirtualButtonBinding b = new VirtualButtonBinding("MyButton", VirtualButton.Keyboard.M);

    VirtualButtonConfig c = new VirtualButtonConfig();

    c.Add(b);

    Input.VirtualButtonConfigSet.Add(c);
   
    float button = Input.GetVirtualButton(1, "MyButton");
```
