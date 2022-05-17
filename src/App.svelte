<script lang="ts">
    import Class from "./sheet/Class.svelte";
    import Information from "./sheet/Information.svelte";
    import Notes from "./sheet/Notes.svelte";
    import StressTrauma from "./sheet/StressTrauma.svelte";
    export let classname: string = "lurk";
    export const classDescription: string =
        "A stealthy infiltrator and burglar";
</script>

<main>
    <div class="grid grid-cols-6 font-serif">
        <div class="col-span-3 uppercase">
            <Information />
            <hr class="mt-3 border-black border-2" />
            <StressTrauma />
            <Notes />
        </div>
        <Class classname="lurk" />
        <div>1</div>
    </div>
</main>
