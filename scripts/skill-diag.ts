/**
 * Diagnostic: test skill discovery against the real user skill directory.
 * Usage: node --import tsx/esm scripts/skill-diag.ts [cwd]
 *
 * Mounts the skill registry + filesystem provider the same way the package
 * tests do, points it at the real $DSH_HOME, and lists what is discovered.
 */

import { homedir } from 'node:os'
import { join } from 'node:path'
import { Context } from '@deepseek-ai/cordis'
import SkillRegistry from '@deepseek-ai/dsh-skill'
import * as SkillFileSystem from '@deepseek-ai/dsh-skill-filesystem'

async function main() {
  const cwd = process.argv[2]
  const ctx = new Context()
  await ctx.plugin(SkillRegistry)
  await ctx.plugin(SkillFileSystem, {
    dshHome: join(homedir(), '.dsh'),
    agentsHome: join(homedir(), '.agents'),
    watch: false,
  })
  const skills = await ctx.skills.list(cwd === undefined ? {} : { cwd })
  console.log(`=== discovered skills (${skills.length}) ===`)
  for (const skill of skills) {
    console.log(`- ${skill.name} [provider=${skill.provider} source=${skill.source}] model=${skill.invocation.modelInvocable} user=${skill.invocation.userInvocable}`)
    console.log(`    ${skill.description}`)
  }
  // Also verify a full body can be loaded for the first skill.
  const first = skills[0]
  if (first !== undefined) {
    const def = await ctx.skills.get(first.name, cwd === undefined ? {} : { cwd })
    console.log(`\n=== load "${first.name}" body: ${def?.content.length ?? 0} chars, path=${def?.path} ===`)
  }
  await ctx.fiber.dispose()
}

void main().catch((error) => {
  console.error('skill diag failed:', error)
  process.exit(1)
})
