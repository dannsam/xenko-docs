# Rendering pipeline

Xenko's rendering pipeline aims to provide a maximum in both, performance and extensibility. It is designed around the following key concepts.

## Render features

Rendering code is divided into @'SiliconStudio.Xenko.Rendering.RenderFeature's, each of which is responsible for processing a single type of @'SiliconStudio.Xenko.Rendering.RenderObject'.

Examples of render features are mesh rendering, sprite rendering, particle rendering, etc...

Features are executed in multiple phases: **Collect**, **Extract**, **Prepare** and **Draw**. This allows to isolate, parallelize and optimize each step of the pipeline separately.

See [Render features](render-features.md) for more details.

## Render views

Scenes can be rendered from multiple view points, represented as @'SiliconStudio.Xenko.Rendering.RenderView's.

Examples are player views -- there could be multiple of them in case of split screen -- or shadow views, with one view per shadow map cascade.

Views are a first-class concept, and available to all rendering-phases, allowing batching across multiple views.

## Render stages

A stage is used to select the [effect](../effects-and-shaders/index.md) and [pipeline state](../low-level-api/pipeline-state.md) per object, as well as to define the output of the current pass.

## Visibility

@'SiliconStudio.Xenko.Rendering.RenderObject's are registered with a @'SiliconStudio.Xenko.Rendering.VisibilityGroup'. During the **Collect**-phase the visibility group performs
customizable culling and filtering based on the @'SiliconStudio.Xenko.Rendering.RenderView', @'SiliconStudio.Xenko.Rendering.RenderStage', etc.