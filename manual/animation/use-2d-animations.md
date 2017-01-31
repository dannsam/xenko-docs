# Use 2D animations
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>

After you [set the properties of a sprite sheet](edit-sprites.md), use scripts to render sprites at runtime.

## Code sample

```cs
public class Animation : SyncScript
{
   // Declared public member fields and properties are displayed in Game Studio.
   private SpriteFromSheet sprite;
   private DateTime lastFrame;

   public override void Start()
   {
       // Initialize the script.
       sprite = Entity.Get<SpriteComponent>().SpriteProvider as SpriteFromSheet;
       lastFrame = DateTime.Now;
   }

   public override void Update()
   {
      // Do something every new frame.
      if ((DateTime.Now - lastFrame) > new TimeSpan(0, 0, 1))
      {
         sprite.CurrentFrame += 1;
         lastFrame = DateTime.Now;
      }
   }
}
```

## See also

* [Import sprite sheets](import-sprite-sheets.md)
* [Edit sprites](edit-sprites.md)