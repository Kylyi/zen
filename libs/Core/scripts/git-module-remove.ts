// @ts-expect-error
import { $, file, fileURLToPath } from 'bun'

import * as p from '@clack/prompts'
import color from 'picocolors'

const isDirectCall = import.meta.url === `file://${process.argv[1]}`
const cwd = fileURLToPath(new URL('../../..', import.meta.url))

export async function runGitModuleRemove() {
  console.log('Running git-module-remove script...', isDirectCall ? 'directly' : 'indirectly)')

  p.intro(`${color.bgCyan(color.black('Git Module Remove'))}`)
  p.note(`${color.red('REQUIRES \'sudo\'!')}`)

  const gitModulesPath = `${cwd}.gitmodules`
  const gitModules = await file(gitModulesPath).text() as string
  const libs = gitModules.split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('path = '))
    .map(line => line.split('=')[1]?.trim())
    .filter(Boolean)
    .map(libName => ({ label: libName, value: libName })) as { label: string, value: string }[]

  const obj = await p.group(
    {
      modules: () => p.multiselect({
        message: 'Select modules to remove:',
        options: libs,
      }),
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled.')
        process.exit(0)
      },
    },
  )

  for await (const module of obj.modules) {
    try {
      await $`git submodule deinit -f ${module}`
    } catch {}

    try {
      await $`sudo rm -rf .git/modules/${module}`
    } catch {}

    try {
      await $`rm -rf ${module}`
    } catch {}

    try {
      await $`git rm -f ${module}`
    } catch {}
  }

  p.outro(`${color.yellow('Modules removed.')}`)
}

if (isDirectCall) {
  await runGitModuleRemove()
}
