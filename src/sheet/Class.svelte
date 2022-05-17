<script lang="ts">
    export let classname: string;

    import sd from "snarkdown";
    import type { Character } from "../srd/characters/Character";

    // @ts-ignore
    import { abilities } from "../srd/characters/abilities.yml";
    // @ts-ignore
    import { cutter } from "../srd/characters/cutter.yml";
    // @ts-ignore
    import { hound } from "../srd/characters/hound.yml";
    // @ts-ignore
    import { leech } from "../srd/characters/leech.yml";
    // @ts-ignore
    import { lurk } from "../srd/characters/lurk.yml";
    // @ts-ignore
    import { slide } from "../srd/characters/slide.yml";
    // @ts-ignore
    import { spider } from "../srd/characters/spider.yml";
    // @ts-ignore
    import { whisper } from "../srd/characters/whisper.yml";
    // @ts-ignore
    import { xp } from "../srd/xp.yml";
    const classes: Character[] = [
        cutter,
        hound,
        leech,
        lurk,
        slide,
        spider,
        whisper,
    ];
    const selected = classes.find((c) => c.name === classname) ?? classes[0];
    const specials = [...abilities[selected.name], ...abilities["all"]];
</script>

<div class="col-span-2 bg-gray-200 h-screen text-xs">
    <div class="grid grid-cols-3">
        <h2 class="uppercase text-7xl pl-5 col-span-2">
            {selected.name}
        </h2>
        <p class="uppercase text-xs py-3 text-gray-500">
            {selected.desc}
        </p>
    </div>
    <p class="bg-gray-300 w-full uppercase pl-4">
        <strong>Special Abilities</strong>
    </p>

    {#each specials as special}
        <div class="flex py-1 pl-2">
            {#each Array(special.scale ?? 1).fill(true) as _, i}
                <input
                    class="mt-1 ml-1"
                    type="checkbox"
                    id={special.name + i}
                />
            {/each}

            <span class="pl-2"
                ><strong class="uppercase">{special.name}</strong
                >:&nbsp;{@html sd(special.desc)}</span
            >
        </div>
    {/each}
    <div class="grid grid-cols-2">
        <div>
            <p class="bg-gray-300 w-full uppercase pl-3">
                <strong>shady friends</strong>
            </p>
            {#each selected.friends as friend}
                <div class="flex pt-1 pl-5">
                    <i class="las la-2x la-fw la-caret-up" />
                    <i class="las la-2x la-fw la-caret-down" />
                    <span class="mt-1">{friend}</span>
                </div>
            {/each}
        </div>
        <div class="pl-3">
            <p class="bg-gray-300 w-full uppercase pl-3">
                <strong>items</strong>
            </p>
            {#each selected.items as item}
                <div class="flex pt-1">
                    <input type="checkbox" />
                    <span class="pl-2">{item}</span>
                </div>
            {/each}
        </div>
    </div>
    <div>
        <p class="bg-gray-300 w-full uppercase pl-3">
            <strong>XP</strong>
        </p>
        <ul>
            <li><em>{xp.desperation}</em></li>
        </ul>
        <span>{xp.end}</span>
        <ul>
            {#each xp.options as o}
                <li><em>{o}</em></li>
            {/each}
        </ul>
    </div>
    <div class="grid grid-cols-2">
        <div>teamwork</div>
        <div>planning & load</div>
    </div>
</div>
