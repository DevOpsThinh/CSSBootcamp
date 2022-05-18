'use strict'

/**
 * Compute a `groupName` object from `group` array with slug as key and
 * title as value.
 *
 * Also compute a `groups` and `groupDescriptions` properties in `ctx`.
 */
module.exports = function groupName (ctx) {
  ctx.groups = ctx.groups || {}
  ctx.groupDescriptions = ctx.groupDescriptions || {}

  // Lowercase the slugs.
  Object.keys(ctx.groups).forEach(function (slug) {
    ctx.groups[slug.toLowerCase()] = ctx.groups[slug]
  })

  ctx.data.forEach(function (item) {
    var group = {}

    item.group.forEach(function (slug) {
      slug = slug.toLowerCase()

      if (slug in ctx.groups) {
        group[slug] = ctx.groups[slug]
      } else {
        group[slug] = ctx.groups[slug] = slug
      }
    })
    Object.assign(ctx.groupDescriptions, item.groupDescriptions)

    item.groupName = group
  })
}
