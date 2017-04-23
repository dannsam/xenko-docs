 param (
    [switch]$API
 )

# Remove build.log file
If(Test-Path build.log)
{
    Remove-Item build.log
}
Start-Transcript -Path build.log
# Generate API doc
if ($API)
{
    Write-Host "Generating API documentation..."
    If(Test-Path api/.manifest)
    {
        Remove-Item api/.manifest 
    }
    # Build metadata from C# source

    deps\docfx\docfx.exe metadata

    Write-Host "Generating types of items..."

    # Get all text from api/toc.yml
    $textYaml = (Get-Content api\toc.yml);
    # Set start variable for toc files source
    $folder = "api\"
    $format = ".yml"
    # Start copy strings from api/toc.yml to temporary file
    $isfile2 = Test-Path temporaryTypeToc.yml
    if($isfile2 -eq 'True'){
        Remove-Item temporaryTypeToc.yml
    }

    function setTypesToTOCItems($i){
        # if string is uid of item 
        if($textYaml[$i].Contains('- uid:')){
            # Copy the uid string
            $textYaml[$i] | Out-file temporaryTypeToc.yml -append
            # Open file of this class and find type of the uid
            $lineEdited = $textYaml[$i].replace('- uid:', '').replace(' ', '').replace('`', '-')
            $content = (Get-Content "$folder$lineEdited$format");
            for($k = 0; $k -lt $content.length; $k++){
                if($content[$k].Contains('type:')){
                    if($textYaml[$i][0] -eq ' '){
                        $typeLine = $content[$k]
                        "  $typeLine" | Out-file temporaryTypeToc.yml -append
                    } else {
                        $content[$k] | Out-file temporaryTypeToc.yml -append
                    }
                   break
                }
            }
        } else {
            $textYaml[$i] | Out-file temporaryTypeToc.yml -append
        }
    }
    $lineCounter = 0;
    While ($lineCounter -lt $textYaml.length){
        setTypesToTOCItems($lineCounter);
        $lineCounter++ 
    }
    
    '' | Set-Content api\toc.yml
    (Get-Content temporaryTypeToc.yml) | Set-Content api\toc.yml
    Remove-Item temporaryTypeToc.yml

    Write-Host "Start regrouping..."
    $ismetadatafile = Test-Path api/toc.yml
    if($ismetadatafile -ne 'True'){
        Write-Host "Metadata are does not exist or was error when metadata was build. Please check the log file and try again. Press any button to finish..."
        $x = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        break
    }
    $isfile = Test-Path temporaryApiToc.yml
    if($isfile -eq 'True'){
        Remove-Item temporaryApiToc.yml
    }
    # Get all text from api/config.yml
    $textYaml = (Get-Content api\toc.yml);
    if($textYaml[$textYaml.length - 1] -eq '### YamlMime regrouped'){
        Write-Host "Metadata are regrouped already or was error when metadata was built. Please check the log file and try again. Press any button to finish..."
        $x = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        break
    }
    # Create empty array for all global section string numbers (section must start from "- uid" )
    $arrayString = @();
    for ($i = 0; $i -le $textYaml.length; $i++){
        $line = $textYaml[$i]
        if($line.length -gt 0){
            if($line.Chars(0) -ne '-'){ 
                continue 
            }
            $arrayString += $i
        }
    }

    function RegroupStructure($start){
        # Remember input string
        $inputStringNumber = $start;
        $lineIdeal = $textYaml[$arrayString[$start]];

       if($lineIdeal -eq '- uid: SiliconStudio' -OR $lineIdeal -eq '- uid: SiliconStudio.Xenko'){
            # Copy section
            $startPoint =  $arrayString[$start];
            $endPoint =  $arrayString[$start+1];
            for($k = $startPoint; $k -lt $endPoint; $k++){
                $textYaml[$k] | Out-file temporaryApiToc.yml -append
            }
           $breakpointDiff = $start + 1
           $breakpointDiff | Out-host
       } else {
            # Define the position of the "items"
            for($n = $arrayString[$start]; $n -lt $textYaml.length; $n++){
                $line = $textYaml[$n]
                if($line.length -gt 0){
                    if($line.Contains('items')){
                        $itemsStart = $n;
                        break
                    }
                }
            }

            # Find the equality breakpoint
            for($i = $start + 1; $i -lt $arrayString.length; $i++){
                $lineIdeal = $textYaml[$arrayString[$start]];
                $lineCurrent = $textYaml[$arrayString[$i]];
                Write-Host 'Checking on equality: ' 
                Write-Host "$lineCurrent -> $lineIdeal"
                if($lineCurrent.Contains($lineIdeal)){
                    Write-Host "$lineIdeal - processed successfully" 
                    $breakpointEqualPoint =  $arrayString[$i]
                    $needPad = "True"
                    break
                } else {
                    $breakpointEqualPoint =  $itemsStart+1
                    $needPad = "False"
                    continue
                }
            }

            $innerClasses = @();
            # Find the difference brakpoint
            for($i = $start; $i -lt $arrayString.length; $i++){
                $lineIdealName = $textYaml[$arrayString[$start] + 1].Replace('name:', '').Replace(' ', '') + '.';
                $lineCurrent = $textYaml[$arrayString[$i]];
                Write-Host 'Checking on difference: ' 
                Write-Host "$lineCurrent -> $lineIdeal"
                if($lineCurrent.Contains($lineIdeal)){
                    if($lineCurrent -ne $lineIdeal){
                        $innerClasses += $lineCurrent
                    }
                    continue
                } else {
                    Write-Host "$lineIdeal - processed successfully" 
                    $breakpointDiff = $i;
                    break
                }
            }

            # Set breakpoints variable
            $startPoint =  $arrayString[$start];
            $itemsStartPoint =  $itemsStart
            $itemsEndPoint =  $arrayString[$start + 1]
            $breakpointDiffPoint =  $arrayString[$breakpointDiff]

            # If we start from 0
            if($inputStringNumber -eq 0){
                for($k = $inputStringNumber; $k -lt $startPoint; $k++){
                    $textYaml[$k] | Out-file temporaryApiToc.yml -append
                }
            }

            # Copy from start to items
            for($k = $startPoint; $k -lt $itemsStartPoint; $k++){
                $textYaml[$k] | Out-file temporaryApiToc.yml -append
            }

            # Copy items string
            $textYaml[$itemsStartPoint] | Out-file temporaryApiToc.yml -append

            # Copy from equality to difference
            for($k = $breakpointEqualPoint; $k -lt $breakpointDiffPoint; $k++){
                $currentLine = $textYaml[$k];
                if($needPad -eq "True"){
                    if($currentLine.Contains('name:')){
                        $currentLine.PadLeft($currentLine.length + 2, " ").Replace($lineIdealName, '') | Out-file temporaryApiToc.yml -append
                    } else {
                        $currentLine.PadLeft($currentLine.length + 2, " ") | Out-file temporaryApiToc.yml -append
                    }
                } else {
                    $currentLine | Out-file temporaryApiToc.yml -append
                }
            }

            # Copy the rest of items
            for($k = $itemsStartPoint + 1; $k -lt $itemsEndPoint; $k++){
                $textYaml[$k] | Out-file temporaryApiToc.yml -append
            }

            $folder = "api\";
            $format = ".yml";
            $activeFile = $lineIdeal.Replace('- uid: ', '');
            "namespaces: Namespaces" | Out-file $folder$activeFile$format -append -Encoding ASCII
            "innerClasses:" | Out-file $folder$activeFile$format -append -Encoding ASCII
            for($i = 0; $i -lt $innerClasses.length; $i++){
                $addingClass = $innerClasses[$i]
                $addingClass.PadLeft($addingClass.length + 2, " ") | Out-file $folder$activeFile$format -append -Encoding ASCII
                $addingClass.PadLeft($addingClass.length + 2, " ").Replace('- uid', '  name').Replace($lineIdealName, '') | Out-file $folder$activeFile$format -append -Encoding ASCII
            }
        }
        
        if($breakpointDiff -lt $arrayString.length - 1){
            RegroupStructure($breakpointDiff)
        } else {
            # Copy from items string to end file
            for($k = $arrayString[$arrayString.length - 1]; $k -lt $textYaml.length; $k++){
                $textYaml[$k] | Out-file temporaryApiToc.yml -append
            }
            "### YamlMime regrouped" | Out-file temporaryApiToc.yml -append
            Write-Host "Regrouping the sub-namespaces complete"
        }
    }

    RegroupStructure(0)
    '' | Set-Content api\toc.yml
    (Get-Content temporaryApiToc.yml) | Set-Content api\toc.yml
    Remove-Item temporaryApiToc.yml


    # Remove SiliconStudio namespace prefix from TOC
    (Get-Content api\toc.yml).replace('  name: SiliconStudio.', '  name: ') | Set-Content api\toc.yml
}
else
{
    If(Test-Path api/.manifest)
    {
        Write-Host "Erasing API documentation..."
        Remove-Item api/*yml -recurse
        Remove-Item api/.manifest 
    }
}

Write-Host "Generating documentation..."

# Output to both build.log and console
deps\docfx\docfx.exe build

# Copy extra items
Copy-Item ReleaseNotes/ReleaseNotes.md _site/ReleaseNotes/
Copy-Item studio_getting_started_links.txt _site/
Stop-Transcript