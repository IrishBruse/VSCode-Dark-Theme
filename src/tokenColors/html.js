export default [
    // < > />
    {
        "scope": [
            "punctuation.definition.tag.begin.html",
            "punctuation.definition.tag.html",
            "punctuation.definition.tag.end.html",
        ],
        "settings": {
            "foreground": "<gray>"
        },
    },
    // Tags
    {
        "scope": [
            "entity.name.tag.localname.html",
            "entity.name.tag.html",
        ],
        "settings": {
            "foreground": "<keyword>"
        },
    },
    // Attributes
    {
        "scope": [
            "invalid.deprecated.entity.other.attribute-name.html",
        ],
        "settings": {
            "foreground": "<local>",
            "fontStyle": "italic",
        },
    },
    // String
    {
        "scope": [
            "punctuation.definition.string.begin.html string.other.link.description.title.html",
            "punctuation.definition.string.end.html string.other.link.description.title.html",
            "string.other.link.description.title.html",
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html",
            "string.quoted.double.html",
            "string.quoted.single.html",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
    // v-bind
    {
        "scope": [
            "meta.attribute.unrecognized.v-bind:href.html entity.other.attribute-name.html",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
    // Attributes
    {
        "scope": [
            "text.html.derivative entity.other.attribute-name.html",
            "entity.other.attribute-name.localname.html",
        ],
        "settings": {
            "foreground": "<local>"
        },
    },
]
