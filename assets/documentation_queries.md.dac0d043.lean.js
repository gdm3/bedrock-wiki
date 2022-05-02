import{_ as l,c as d,a,w as n,e as i,b as e,d as t,r as o,o as c}from"./404.md.def01f99.js";const I=`{"title":"Molang Queries","description":"","frontmatter":{"title":"Molang Queries"},"headers":[{"level":2,"title":"query.get_equiped_item_name","slug":"query-get-equiped-item-name"},{"level":2,"title":"query.get_name","slug":"query-get-name"},{"level":2,"title":"query.is_name_any","slug":"query-is-name-any"},{"level":2,"title":"query.is_item_name_any","slug":"query-is-item-name-any"},{"level":3,"title":"Test for items within the player's inventory","slug":"test-for-items-within-the-player-s-inventory"},{"level":2,"title":"query.armor_texture_slot","slug":"query-armor-texture-slot"},{"level":3,"title":"X","slug":"x"},{"level":3,"title":"Y","slug":"y"},{"level":3,"title":"Example","slug":"example"},{"level":2,"title":"query.armor_material_slot","slug":"query-armor-material-slot"},{"level":3,"title":"X","slug":"x-1"},{"level":3,"title":"Y","slug":"y-1"},{"level":2,"title":"query.armor_color_slot","slug":"query-armor-color-slot"},{"level":3,"title":"Slot","slug":"slot"},{"level":3,"title":"Channel","slug":"channel"},{"level":3,"title":"Color","slug":"color"},{"level":2,"title":"query.is_enchanted","slug":"query-is-enchanted"},{"level":2,"title":"query.is_eating","slug":"query-is-eating"},{"level":2,"title":"query.is_ghost","slug":"query-is-ghost"},{"level":2,"title":"query.is_grazing","slug":"query-is-grazing"},{"level":2,"title":"query.is_jumping","slug":"query-is-jumping"},{"level":2,"title":"query.modified_move_speed","slug":"query-modified-move-speed"},{"level":2,"title":"query.on_fire_time","slug":"query-on-fire-time"},{"level":2,"title":"query.scoreboard","slug":"query-scoreboard"},{"level":2,"title":"query.structural_integrity","slug":"query-structural-integrity"},{"level":2,"title":"variable.attack_time","slug":"variable-attack-time"},{"level":3,"title":"Explanation","slug":"explanation"},{"level":3,"title":"For entities","slug":"for-entities"},{"level":3,"title":"For the Player","slug":"for-the-player"},{"level":2,"title":"query.is_roaring","slug":"query-is-roaring"},{"level":2,"title":"query.head_x_rotation","slug":"query-head-x-rotation"},{"level":2,"title":"query.head_y_rotation","slug":"query-head-y-rotation"},{"level":2,"title":"query.target_x_rotation and query.target_y_rotation","slug":"query-target-x-rotation-and-query-target-y-rotation"},{"level":2,"title":"query.eye_target_x_rotation and query.eye_target_y_rotation","slug":"query-eye-target-x-rotation-and-query-eye-target-y-rotation"},{"level":2,"title":"variable.short_arm_offset_right","slug":"variable-short-arm-offset-right"},{"level":2,"title":"variable.short_arm_offset_left","slug":"variable-short-arm-offset-left"},{"level":2,"title":"query.movement_direction","slug":"query-movement-direction"},{"level":2,"title":"query.block_neighbor_has_any_tag and query.relative_block_has_any_tag","slug":"query-block-neighbor-has-any-tag-and-query-relative-block-has-any-tag"}],"relativePath":"documentation/queries.md"}`,u={},p=i("",13),h=t("animation_controllers/ac.json"),m=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token punctuation"},"{"),t(`
    `),e("span",{class:"token property"},'"format_version"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"1.10.0"'),e("span",{class:"token punctuation"},","),t(`
    `),e("span",{class:"token property"},'"animation_controllers"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
        `),e("span",{class:"token property"},'"controller.animation.ac"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
            `),e("span",{class:"token property"},'"initial_state"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"default"'),e("span",{class:"token punctuation"},","),t(`
            `),e("span",{class:"token property"},'"states"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                `),e("span",{class:"token property"},'"default"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                    `),e("span",{class:"token property"},'"transitions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"active"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"query.is_alive"'),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),t(`
                `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),t(`
                `),e("span",{class:"token property"},'"active"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                    `),e("span",{class:"token property"},'"transitions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"default"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"(1.0)"'),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),t(`
                    `),e("span",{class:"token property"},'"animations"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"anim"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},`"query.get_name == '...'"`),t(),e("span",{class:"token comment"},"// You can use it only here!"),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),t(`
                `),e("span",{class:"token punctuation"},"}"),t(`
            `),e("span",{class:"token punctuation"},"}"),t(`
        `),e("span",{class:"token punctuation"},"}"),t(`
    `),e("span",{class:"token punctuation"},"}"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br")])],-1),y=e("h2",{id:"query-is-name-any",tabindex:"-1"},[t("query.is_name_any "),e("a",{class:"header-anchor",href:"#query-is-name-any","aria-hidden":"true"},"#")],-1),b=e("p",null,[t("Formatted like: "),e("code",null,"query.get_name('Name1', 'Name2')"),t(". Takes one or more arguments. Turns true if actual in-game displayed name matches one of the given names. Needs to be used in special conditions.")],-1),g=t("animation_controllers/ac.json"),_=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token punctuation"},"{"),t(`
    `),e("span",{class:"token property"},'"format_version"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"1.10.0"'),e("span",{class:"token punctuation"},","),t(`
    `),e("span",{class:"token property"},'"animation_controllers"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
        `),e("span",{class:"token property"},'"controller.animation.ac"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
            `),e("span",{class:"token property"},'"initial_state"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"default"'),e("span",{class:"token punctuation"},","),t(`
            `),e("span",{class:"token property"},'"states"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                `),e("span",{class:"token property"},'"default"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                    `),e("span",{class:"token property"},'"transitions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"active"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"query.is_alive"'),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),t(`
                `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),t(`
                `),e("span",{class:"token property"},'"active"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
                    `),e("span",{class:"token property"},'"transitions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"default"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"(1.0)"'),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),t(`
                    `),e("span",{class:"token property"},'"animations"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),t(`
                        `),e("span",{class:"token punctuation"},"{"),t(`
                            `),e("span",{class:"token property"},'"anim"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"query.is_name_any(...)"'),t(),e("span",{class:"token comment"},"// You can use it only here!"),t(`
                        `),e("span",{class:"token punctuation"},"}"),t(`
                    `),e("span",{class:"token punctuation"},"]"),t(`
                `),e("span",{class:"token punctuation"},"}"),t(`
            `),e("span",{class:"token punctuation"},"}"),t(`
        `),e("span",{class:"token punctuation"},"}"),t(`
    `),e("span",{class:"token punctuation"},"}"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br"),e("span",{class:"line-number"},"21"),e("br"),e("span",{class:"line-number"},"22"),e("br"),e("span",{class:"line-number"},"23"),e("br"),e("span",{class:"line-number"},"24"),e("br"),e("span",{class:"line-number"},"25"),e("br"),e("span",{class:"line-number"},"26"),e("br"),e("span",{class:"line-number"},"27"),e("br"),e("span",{class:"line-number"},"28"),e("br"),e("span",{class:"line-number"},"29"),e("br")])],-1),f=i("",112);function k(q,v,x,w,T,E){const r=o("CodeHeader"),s=o("Spoiler");return c(),d("div",null,[p,a(s,{title:"Show"},{default:n(()=>[a(r,null,{default:n(()=>[h]),_:1}),m]),_:1}),y,b,a(s,{title:"Show"},{default:n(()=>[a(r,null,{default:n(()=>[g]),_:1}),_]),_:1}),f])}var C=l(u,[["render",k]]);export{I as __pageData,C as default};