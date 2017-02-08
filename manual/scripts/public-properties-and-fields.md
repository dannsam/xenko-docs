# Public properties and fields

You can set **public properties and fields** from the script component properties in Game Studio. This means people on your team can configure each instance of a script attached to entities differently.

> [!Note] 
> Public properties or fields must be serializable to be used in Game Studio. 

The following script is an example of a script with a public property (`DelayTimeOut`):

```cs
public class SampleSyncScript : StartupScript
{
	// This public member will appear in Game Studio
	public float DelayTimeOut { get; set; }
}
```

Game Studio shows the field in the script component properties like this:

![Public property appears in the Property grid](media/scripts-in-xenko-change-value-public-property.png)

If you don't want Game Studio to show the field, you can: 

* declare your member internal or private, or 
* use the [DataMemberIgnore](xref:SiliconStudio.Core.DataMemberIgnoreAttribute) attribute like this:

```cs

	// This public property won't be available in Game Studio
	[DataMemberIgnore]
	public float DelayTimeOut { get; set; }
	
```

![Public property has been hidden with ```[DataMemberIgnore]```](media/scripts-in-xenko-public-property-with-datamemberignore.png)

## See also

* [Create a script](create-a-script.md)
* [Types of script](types-of-script.md)
* [Scheduling-and-priorities](scheduling-and-priorities.md)
* [Add a script](add-a-script.md)
* [Debugging](debugging.md)