# Use 3D animations
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

You can add an [AnimationComponent](xref:SiliconStudio.Xenko.Animations.AnimationComponent) to an entity and [set up its parameters](set-up-animations.md) in the Game Studio. The [AnimationComponent](xref:SiliconStudio.Xenko.Animations.AnimationComponent) class is designed to be used mainly from a script. 

Some of the more useful properties include:

| Property | Description| 
| ----- | ---- |
| [Animations](xref:SiliconStudio.Xenko.Engine.AnimationComponent\(Animations\)) | Gets the animation clips associated with this [AnimationComponent](xref:SiliconStudio.Xenko.Animations.AnimationComponent). |
| [BlendTreeBuilder](xref:SiliconStudio.Xenko.Engine.AnimationComponent\(BlendTreeBuilder\)) | Gets or sets animation blend tree builder. Note you can create custom blending trees; see [Custom blend tree](custom-blending-trees.md) for more information. |	
| [PlayingAnimations](xref:SiliconStudio.Xenko.Engine.AnimationComponent\(PlayingAnimations\)) | Gets the list of active animations. Use it to customize your startup animations. The playing animations are updated automatically by the animation processor, so be careful or avoid entirely changing the list or keeping a reference to a playing animation. |

## Code sample

[Setting up](set-up-animations.md) animations already explains how to attach the pre-built *AnimationStart* script.

The code below shows how to assign a simple animation on a character based on its walking speed:

```cs
public class AnimationClipExample : SyncScript
{
    // Public animation clips
    public AnimationClip idleClip;
    public AnimationClip walkClip;
    public AnimationClip runClip;

    //public variable to determine if model is running or walking
using SiliconStudio.Xenko.Engine;

namespace AdditiveAnimation
{
    public class AnimationClipExample : SyncScript
    {
        public float MovementSpeed { get; set; } = 0f;

        private float walkingSpeedLimit = 1.0f;

        // Assuming the script is attached to an entity which has an animation component
        private AnimationComponent animationComponent;

        public override void Start()
        {
            //let`s cache some variables we will need later
            animationComponent = Entity.Get<AnimationComponent>();
            animationComponent.Play("Idle");
        }

        protected void PlayAnimation(string name)
        {
            if (!animationComponent.IsPlaying(name))
                animationComponent.Play(name);
        }

        public override void Update()
        {
            if (MovementSpeed <= 0)
            {
                PlayAnimation("Idle");
            }
            else if (MovementSpeed <= walkingSpeedLimit)
            {
                PlayAnimation("Walk");
            }
            else 
            {
                PlayAnimation("Run");
            }
        }
    }
}
```

## Animation blend tree

There is also the option to override the [animation blend tree](custom-blending-trees.md) and do all animation blending in the script.

The three game templates, which require more advanced techniques, are a good example of how to do this.

## See also

* [3D animations overview page](animation.md)
* [Set up animations](set-up-animations.md)
* [Procedural animations](procedural-animation.md)
* [Additive animations](additive-animation.md)
* [Custom blending trees](custom-blending-trees.md)
