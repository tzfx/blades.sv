<script lang="ts">
    export let classname: string = "lurk";

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
    // @ts-ignore
    import { teamwork } from "../srd/teamwork.yml";
    // @ts-ignore
    import { planning } from "../srd/planning.yml";
    const classes: Character[] = [
        cutter,
        hound,
        leech,
        lurk,
        slide,
        spider,
        whisper,
    ];
    let selected;
    let specials;
    select();
    function select() {
        selected = classes.find((c) => c.name === classname) ?? classes[0];
        specials = [...abilities[selected.name], ...abilities["all"]];
    }
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
    <div class="pb-2">
        <p class="bg-gray-300 w-full uppercase pl-3">
            <strong>XP</strong>
        </p>
        <div class="pr-3 w-full pt-2">
            <ul class="list-disc pl-5">
                <li><em>{xp.desperation}</em></li>
            </ul>
            <span class="pl-3">{xp.end}</span>
            <ul class="list-disc pl-5">
                {#each xp.options as o}
                    <li><em>{o}</em></li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="grid grid-cols-3 bg-white border-2 border-gray-300">
        <div>
            <p class="w-full uppercase text-lg pl-3 pt-1">
                <strong>teamwork</strong>
            </p>
            {#each teamwork as tw}
                <p class="bg-gray-300 m-2 pl-2">{@html sd(tw)}</p>
            {/each}
        </div>
        <div class="col-span-2 w-full border-l-2">
            <p class="w-full uppercase text-lg pt-1 pl-3">
                <strong>{planning.name}</strong>
            </p>
            <p class="pl-2">{@html sd(planning.desc)}</p>
            <div class="grid grid-cols-2">
                <div>
                    {#each planning.plans.slice(0, 3) as plan}
                        <p class="bg-gray-300 m-2 pl-2">
                            <strong>{plan.plan}</strong>:<em>{plan.detail}</em>
                        </p>
                    {/each}
                </div>
                <div>
                    {#each planning.plans.slice(3) as plan}
                        <p class="bg-gray-300 m-2 pl-2">
                            <strong>{plan.plan}</strong>:<em>{plan.detail}</em>
                        </p>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
