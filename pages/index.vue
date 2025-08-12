<template>
    <div class="w-full md:w-10/12 md:mx-auto h-screen">
        <h2 class="text-3xl text-gray-200 font-bold pl-4">Todo App</h2>

        <div class="w-full flex flex-col gap-3 px-2 pt-4">
            <div class="w-full">
                <UButtonGroup class="w-full">
                    <UInput type="text" size="xl" placeholder="Add your new TODO" />
                    <!-- <UButton type="button" class="px-3">+</UButton> -->
                    <UButton
                        size="xs"
                        type="button"
                        class="px-3 flex justify-center content-center text-3xl font-bold text-center"
                    >
                        +
                    </UButton>
                </UButtonGroup>
            </div>

            <div class="w-full flex flex-col gap-3 pt-3 mb-8">
                <div class="bg-gray-600 hover:bg-gray-600/40 h-12 w-full rounded-md grid grid-cols-5 gap-2">
                    <div class="w-full col-span-4 ps-2 pe-3 overflow-hidden text-nowrap flex content-center">
                        <p class="text-gray-200 text-xl pt-2">Algo aqui muito londgjhgdfhdghd ghdfgdhfgfdhdfhg</p>
                    </div>
                    <UButton
                        type="button"
                        class="cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    >
                        +
                    </UButton>
                </div>
                <div class="bg-gray-600 hover:bg-gray-600/40 h-12 w-full rounded-md grid grid-cols-5 gap-2">
                    <div class="w-full col-span-4 ps-2 pe-3 overflow-hidden text-nowrap flex content-center">
                        <p class="text-gray-200 text-xl pt-2">Algo aqui muito londgjhgdfhdghd ghdfgdhfgfdhdfhg</p>
                    </div>
                    <UButton
                        type="button"
                        class="cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    >
                        +
                    </UButton>
                </div>
                <div class="bg-gray-600 hover:bg-gray-600/40 h-12 w-full rounded-md grid grid-cols-5 gap-2">
                    <div class="w-full col-span-4 ps-2 pe-3 overflow-hidden text-nowrap flex content-center">
                        <p class="text-gray-200 text-xl pt-2">Algo aqui muito londgjhgdfhdghd ghdfgdhfgfdhdfhg</p>
                    </div>
                    <UButton
                        type="button"
                        class="cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    >
                        +
                    </UButton>
                </div>
            </div>

            <div class="w-full flex flex-col gap-3 pt-3 mb-8 opacity-20 hover:opacity-80">
                <div class="bg-gray-600 hover:bg-gray-600/40 h-12 w-full rounded-md grid grid-cols-5 gap-2">
                    <div class="w-full col-span-4 ps-2 pe-3 overflow-hidden text-nowrap flex content-center">
                        <p class="text-gray-200 text-xl pt-2 italic line-through">
                            Algo aqui muito londgjhgdfhdghd ghdfgdhfgfdhdfhg
                        </p>
                    </div>
                    <UButton
                        type="button"
                        class="cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    >
                        +
                    </UButton>
                </div>
                <div class="bg-gray-600 hover:bg-gray-600/40 h-12 w-full rounded-md grid grid-cols-5 gap-2">
                    <div class="w-full col-span-4 ps-2 pe-3 overflow-hidden text-nowrap flex content-center">
                        <p class="text-gray-200 text-xl pt-2">Algo aqui muito londgjhgdfhdghd ghdfgdhfgfdhdfhg</p>
                    </div>
                    <UButton
                        type="button"
                        class="cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    >
                        +
                    </UButton>
                </div>
                <div class="bg-gray-600 hover:bg-gray-600/40 h-12 w-full rounded-md grid grid-cols-5 gap-2">
                    <div class="w-full col-span-4 ps-2 pe-3 overflow-hidden text-nowrap flex content-center">
                        <p class="text-gray-200 text-xl pt-2">Algo aqui muito londgjhgdfhdghd ghdfgdhfgfdhdfhg</p>
                    </div>
                    <UButton
                        type="button"
                        class="cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    >
                        +
                    </UButton>
                </div>
            </div>

            <div class="w-full flex flex-col gap-3 pt-3 mb-8">
                <div class="div flex frex-row gap-3 justify-between content-center">
                    <h4 class="text-2xl text-gray-200 font-bold">You have X pending tasks</h4>
                    <UButton
                        type="button"
                        size="xs"
                        class="cursor-pointer flex justify-center content-center text-3xl font-bold text-center"
                    >
                        Clear all
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//
</script>
